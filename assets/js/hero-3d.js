/**
 * Hero 3D Hardware Node (Three.js)
 * Interactive procedural ESP32 / Custom IoT PCB with circuit traces and real-time interaction.
 * Crafted for Reyhan Devara's portfolio (AI & Embedded Systems Engineer).
 */

(function () {
  'use strict';

  // Check if THREE is available
  if (typeof THREE === 'undefined') {
    console.warn('Three.js is not loaded. Hero 3D skipped.');
    return;
  }

  const container = document.getElementById('hero3dCanvasWrap');
  if (!container) return;

  // Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const width = container.clientWidth || 400;
  const height = container.clientHeight || 480;

  const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
  camera.position.set(0, 3.8, 9.6);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  container.appendChild(renderer.domElement);

  // --------------------------------------------------------------------------
  // Lighting
  // --------------------------------------------------------------------------
  const ambientLight = new THREE.AmbientLight(0xfdfbf7, 1.4);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xfff8ed, 2.4);
  mainLight.position.set(5, 8, 5);
  mainLight.castShadow = true;
  mainLight.shadow.mapSize.width = 1024;
  mainLight.shadow.mapSize.height = 1024;
  mainLight.shadow.bias = -0.0005;
  scene.add(mainLight);

  const rimLight = new THREE.DirectionalLight(0xdbeafe, 1.2);
  rimLight.position.set(-6, -3, -4);
  scene.add(rimLight);

  const pulsePointLight = new THREE.PointLight(0xf59e0b, 1.2, 4);
  pulsePointLight.position.set(0, 0.6, 0);
  scene.add(pulsePointLight);

  // --------------------------------------------------------------------------
  // Board Group & Hierarchy
  // --------------------------------------------------------------------------
  const boardGroup = new THREE.Group();
  boardGroup.scale.set(0.82, 0.82, 0.82);
  boardGroup.position.set(0, 0.1, 0);
  scene.add(boardGroup);

  // Initial tilt for realistic isometric hero presentation
  boardGroup.rotation.x = 0.52;
  boardGroup.rotation.y = -0.45;
  boardGroup.rotation.z = 0.12;

  // Materials
  const pcbMaterial = new THREE.MeshStandardMaterial({
    color: 0x141a17, // Deep matte solder mask
    roughness: 0.45,
    metalness: 0.12
  });

  const goldMaterial = new THREE.MeshStandardMaterial({
    color: 0xdfab35, // ENIG Gold plating
    roughness: 0.22,
    metalness: 0.88
  });

  const silverMetal = new THREE.MeshStandardMaterial({
    color: 0xd8d8d8, // RF Shield metal can
    roughness: 0.28,
    metalness: 0.82
  });

  const siliconChipMat = new THREE.MeshStandardMaterial({
    color: 0x111111, // Molded epoxy chip body
    roughness: 0.65,
    metalness: 0.15
  });

  const copperTraceMat = new THREE.LineBasicMaterial({
    color: 0xdfab35,
    linewidth: 1.5,
    transparent: true,
    opacity: 0.75
  });

  const ledGreenMat = new THREE.MeshStandardMaterial({
    color: 0x10b981,
    emissive: 0x10b981,
    emissiveIntensity: 1.8,
    roughness: 0.3
  });

  const ledAmberMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    emissive: 0xf59e0b,
    emissiveIntensity: 1.5,
    roughness: 0.3
  });

  // 1. Main PCB Substrate
  const pcbGeo = new THREE.BoxGeometry(3.6, 0.12, 5.2);
  const pcbMesh = new THREE.Mesh(pcbGeo, pcbMaterial);
  pcbMesh.receiveShadow = true;
  pcbMesh.castShadow = true;
  boardGroup.add(pcbMesh);

  // 2. Corner Mounting Rings (Gold Plated)
  const ringGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.13, 20);
  const holeGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.14, 16);
  const holeMat = new THREE.MeshBasicMaterial({ color: 0x050505 });

  const cornerPositions = [
    [-1.55, 1.55],
    [1.55, 1.55],
    [-1.55, -2.35],
    [1.55, -2.35]
  ];

  cornerPositions.forEach(([x, z]) => {
    const ring = new THREE.Mesh(ringGeo, goldMaterial);
    ring.position.set(x, 0, z);
    const hole = new THREE.Mesh(holeGeo, holeMat);
    hole.position.set(x, 0, z);
    boardGroup.add(ring);
    boardGroup.add(hole);
  });

  // 3. Dual-Row Header Pins (Left and Right)
  const pinGeo = new THREE.BoxGeometry(0.09, 0.38, 0.09);
  const pinCount = 15;
  const pinSpacing = 0.28;
  const pinZStart = -1.9;

  for (let side = -1; side <= 1; side += 2) {
    const pinX = side * 1.62;
    for (let i = 0; i < pinCount; i++) {
      const pinZ = pinZStart + i * pinSpacing;
      const pin = new THREE.Mesh(pinGeo, goldMaterial);
      pin.position.set(pinX, 0.16, pinZ);
      pin.castShadow = true;
      boardGroup.add(pin);

      // Solder pad ring around each pin
      const padGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.13, 10);
      const pad = new THREE.Mesh(padGeo, goldMaterial);
      pad.position.set(pinX, 0, pinZ);
      boardGroup.add(pad);
    }
  }

  // 4. ESP32-S3 Microcontroller Module (RF Shield Can)
  const shieldGeo = new THREE.BoxGeometry(2.1, 0.22, 2.6);
  const shield = new THREE.Mesh(shieldGeo, silverMetal);
  shield.position.set(0, 0.16, -0.6);
  shield.castShadow = true;
  shield.receiveShadow = true;
  boardGroup.add(shield);

  // Label banner on ESP32 shield
  const labelGeo = new THREE.PlaneGeometry(1.6, 1.8);
  const labelCanvas = document.createElement('canvas');
  labelCanvas.width = 256;
  labelCanvas.height = 256;
  const ctx = labelCanvas.getContext('2d');
  ctx.fillStyle = '#c8c8c8';
  ctx.fillRect(0, 0, 256, 256);
  ctx.fillStyle = '#1c1c1c';
  ctx.font = 'bold 26px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('ESP32-S3', 128, 90);
  ctx.font = '18px sans-serif';
  ctx.fillText('AI & IOT ENGINE', 128, 130);
  ctx.font = '14px monospace';
  ctx.fillText('2.4GHz Wi-Fi / BLE 5', 128, 165);

  const labelTexture = new THREE.CanvasTexture(labelCanvas);
  const labelMat = new THREE.MeshBasicMaterial({ map: labelTexture, transparent: true, opacity: 0.85 });
  const labelMesh = new THREE.Mesh(labelGeo, labelMat);
  labelMesh.rotation.x = -Math.PI / 2;
  labelMesh.position.set(0, 0.28, -0.6);
  boardGroup.add(labelMesh);

  // 5. On-Board Antenna (Top PCB region)
  const antennaTraceGeo = new THREE.BufferGeometry();
  const antennaPoints = [];
  const antZ = 1.9;
  for (let x = -1.2; x <= 1.2; x += 0.25) {
    antennaPoints.push(new THREE.Vector3(x, 0.07, antZ));
    antennaPoints.push(new THREE.Vector3(x + 0.12, 0.07, antZ + 0.45));
    antennaPoints.push(new THREE.Vector3(x + 0.25, 0.07, antZ));
  }
  antennaTraceGeo.setFromPoints(antennaPoints);
  const antenna = new THREE.Line(antennaTraceGeo, goldMaterial);
  boardGroup.add(antenna);

  // 6. Secondary IC Chips (Flash memory, USB-UART bridge, LDO Regulator)
  const chips = [
    { x: -0.65, z: 1.1, w: 0.65, h: 0.14, d: 0.65 },
    { x: 0.65, z: 1.1, w: 0.55, h: 0.12, d: 0.55 },
    { x: 0, z: 1.35, w: 0.7, h: 0.15, d: 0.4 }
  ];

  chips.forEach((c) => {
    const geo = new THREE.BoxGeometry(c.w, c.h, c.d);
    const m = new THREE.Mesh(geo, siliconChipMat);
    m.position.set(c.x, c.h / 2 + 0.06, c.z);
    m.castShadow = true;
    boardGroup.add(m);
  });

  // 7. USB-C Port
  const usbGeo = new THREE.BoxGeometry(0.85, 0.32, 0.95);
  const usb = new THREE.Mesh(usbGeo, silverMetal);
  usb.position.set(0, 0.21, 2.3);
  usb.castShadow = true;
  boardGroup.add(usb);

  const usbMouthGeo = new THREE.BoxGeometry(0.65, 0.12, 0.1);
  const usbMouth = new THREE.Mesh(usbMouthGeo, holeMat);
  usbMouth.position.set(0, 0.21, 2.78);
  boardGroup.add(usbMouth);

  // 8. Surface Mount LEDs (Power & Activity)
  const ledGeo = new THREE.BoxGeometry(0.12, 0.08, 0.16);
  const pwrLed = new THREE.Mesh(ledGeo, ledGreenMat);
  pwrLed.position.set(-1.1, 0.1, 1.4);
  boardGroup.add(pwrLed);

  const actLed = new THREE.Mesh(ledGeo, ledAmberMat);
  actLed.position.set(-1.1, 0.1, 1.1);
  boardGroup.add(actLed);

  // 9. Procedural Circuit Signal Traces
  const traceRoutes = [
    [[-1.4, 0.07, 0.5], [-0.8, 0.07, 0.5], [-0.8, 0.07, 0.2], [0, 0.07, 0.2]],
    [[1.4, 0.07, 0.8], [0.8, 0.07, 0.8], [0.8, 0.07, 0.3], [0.3, 0.07, 0.3]],
    [[-1.4, 0.07, -1.2], [-0.9, 0.07, -1.2], [-0.9, 0.07, -0.6]],
    [[1.4, 0.07, -1.2], [0.9, 0.07, -1.2], [0.9, 0.07, -0.6]],
    [[-0.5, 0.07, 1.6], [-0.5, 0.07, 2.1], [-0.2, 0.07, 2.1]],
    [[0.5, 0.07, 1.6], [0.5, 0.07, 2.1], [0.2, 0.07, 2.1]]
  ];

  traceRoutes.forEach((route) => {
    const pts = route.map((p) => new THREE.Vector3(p[0], p[1], p[2]));
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const line = new THREE.Line(geo, copperTraceMat);
    boardGroup.add(line);
  });

  // 10. Floating Sensor / Signal Particles (Data flow effect)
  const particleCount = 28;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const particleSpeeds = [];

  for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3] = (Math.random() - 0.5) * 3.2;
    particlePositions[i * 3 + 1] = Math.random() * 0.8 + 0.1;
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 4.6;
    particleSpeeds.push(Math.random() * 0.02 + 0.01);
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0xdfab35,
    size: 0.06,
    transparent: true,
    opacity: 0.85
  });

  const particleSystem = new THREE.Points(particleGeo, particleMat);
  boardGroup.add(particleSystem);

  // --------------------------------------------------------------------------
  // Interaction & Physics
  // --------------------------------------------------------------------------
  let mouseX = 0;
  let mouseY = 0;
  let targetRotationX = 0.52;
  let targetRotationY = -0.45;
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };
  let isUserInteracting = false;
  let idleTimer = null;

  function onPointerMove(e) {
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    mouseX = x;
    mouseY = y;

    if (isDragging) {
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      targetRotationY += deltaX * 0.009;
      targetRotationX += deltaY * 0.009;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    } else if (!isUserInteracting) {
      // Gentle parallax tilt following cursor
      targetRotationY = -0.45 + mouseX * 0.45;
      targetRotationX = 0.52 - mouseY * 0.35;
    }
  }

  function onPointerDown(e) {
    isDragging = true;
    isUserInteracting = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
    container.style.cursor = 'grabbing';
    clearTimeout(idleTimer);
  }

  function onPointerUp() {
    isDragging = false;
    container.style.cursor = 'grab';
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      isUserInteracting = false;
    }, 3500);
  }

  function onClick() {
    // Pulse light animation on click
    pulsePointLight.intensity = 3.5;
    actLed.material.emissiveIntensity = 4.0;
    setTimeout(() => {
      pulsePointLight.intensity = 1.2;
      actLed.material.emissiveIntensity = 1.5;
    }, 280);
  }

  container.addEventListener('pointermove', onPointerMove, { passive: true });
  container.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointerup', onPointerUp);
  container.addEventListener('click', onClick);
  container.style.cursor = 'grab';

  // --------------------------------------------------------------------------
  // Resize Handling & Intersection Observer
  // --------------------------------------------------------------------------
  let isVisible = true;

  function onResize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (w === 0 || h === 0) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  window.addEventListener('resize', onResize);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);
  }

  // --------------------------------------------------------------------------
  // View Switcher (Portrait vs 3D)
  // --------------------------------------------------------------------------
  const btnPhoto = document.getElementById('heroBtnPhoto');
  const btn3d = document.getElementById('heroBtn3d');
  const wrap3d = document.getElementById('hero3dView');
  const wrapPhoto = document.getElementById('heroPortraitView');

  if (btnPhoto && btn3d && wrap3d && wrapPhoto) {
    btnPhoto.addEventListener('click', () => {
      btnPhoto.classList.add('active');
      btn3d.classList.remove('active');
      btnPhoto.setAttribute('aria-selected', 'true');
      btn3d.setAttribute('aria-selected', 'false');
      wrapPhoto.classList.remove('hidden');
      wrap3d.classList.remove('active');
    });

    btn3d.addEventListener('click', () => {
      btn3d.classList.add('active');
      btnPhoto.classList.remove('active');
      btn3d.setAttribute('aria-selected', 'true');
      btnPhoto.setAttribute('aria-selected', 'false');
      wrap3d.classList.add('active');
      wrapPhoto.classList.add('hidden');
      setTimeout(onResize, 60);
    });
  }

  // --------------------------------------------------------------------------
  // Animation Loop (High Performance & Respecting Reduced Motion)
  // --------------------------------------------------------------------------
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    if (!isVisible || document.hidden) return;

    const elapsedTime = clock.getElapsedTime();

    if (!reduceMotion) {
      // Smooth lerp towards target rotation
      boardGroup.rotation.y += (targetRotationY - boardGroup.rotation.y) * 0.06;
      boardGroup.rotation.x += (targetRotationX - boardGroup.rotation.x) * 0.06;

      // Gentle continuous hover floating motion when not dragging
      if (!isDragging) {
        boardGroup.position.y = Math.sin(elapsedTime * 1.6) * 0.1;
      }

      // Blink activity LED periodically
      const blink = Math.sin(elapsedTime * 8) > 0.4 ? 2.5 : 0.4;
      actLed.material.emissiveIntensity = blink;

      // Animate floating particles
      const pos = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3 + 1] += particleSpeeds[i];
        if (pos[i * 3 + 1] > 0.95) {
          pos[i * 3 + 1] = 0.08;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;
    }

    renderer.render(scene, camera);
  }

  animate();
})();
