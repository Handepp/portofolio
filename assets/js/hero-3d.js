/**
 * Hero 3D Hardware Lab - High Fidelity Procedural ESP32-S3 IoT Core
 * Built with Three.js for Reyhan Devara's portfolio.
 * Features: Obsidian Matte FR4, ENIG Gold Traces, SMT Components,
 * Dynamic Data Packet Pulses, Interactive Orbit & Telemetry Controls.
 */

(function () {
  'use strict';

  if (typeof THREE === 'undefined') {
    console.warn('Three.js is not loaded. Hero 3D skipped.');
    return;
  }

  const container = document.getElementById('hero3dCanvasWrap');
  if (!container) return;

  // Scene setup
  const scene = new THREE.Scene();
  
  // Clean, transparent/dark ambient atmosphere
  let width = container.clientWidth || 460;
  let height = container.clientHeight || 520;

  const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 100);
  camera.position.set(0, 3.4, 9.4);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // --------------------------------------------------------------------------
  // Lighting (Studio Hardware Key/Fill/Rim)
  // --------------------------------------------------------------------------
  const ambientLight = new THREE.AmbientLight(0xfffbf5, 1.6);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xfff5e6, 2.6);
  keyLight.position.set(6, 9, 6);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 1024;
  keyLight.shadow.mapSize.height = 1024;
  keyLight.shadow.bias = -0.0004;
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x93c5fd, 1.4);
  rimLight.position.set(-6, -2, -5);
  scene.add(rimLight);

  const goldAccentLight = new THREE.PointLight(0xd97706, 1.8, 5);
  goldAccentLight.position.set(0, 1.2, 0.4);
  scene.add(goldAccentLight);

  // --------------------------------------------------------------------------
  // Blueprint Schematic Floor Grid (3D Depth)
  // --------------------------------------------------------------------------
  const gridHelper = new THREE.GridHelper(10, 20, 0xd4af37, 0x334155);
  gridHelper.position.y = -1.6;
  gridHelper.material.opacity = 0.22;
  gridHelper.material.transparent = true;
  scene.add(gridHelper);

  // --------------------------------------------------------------------------
  // Board Group Hierarchy
  // --------------------------------------------------------------------------
  const boardGroup = new THREE.Group();
  boardGroup.scale.set(0.82, 0.82, 0.82);
  boardGroup.position.set(0, 0.15, 0);
  scene.add(boardGroup);

  // Initial Isometric Engineering Angle
  const defaultRotX = 0.52;
  const defaultRotY = -0.42;
  boardGroup.rotation.x = defaultRotX;
  boardGroup.rotation.y = defaultRotY;

  // --------------------------------------------------------------------------
  // High-End Materials
  // --------------------------------------------------------------------------
  // 1. Matte Obsidian Solder Mask (FR4)
  const pcbMat = new THREE.MeshStandardMaterial({
    color: 0x11161d, // Deep engineered black/slate
    roughness: 0.38,
    metalness: 0.14
  });

  // 2. ENIG Gold Plating (Traces, Pads, Header Pins)
  const enigGoldMat = new THREE.MeshStandardMaterial({
    color: 0xe5b842,
    roughness: 0.18,
    metalness: 0.92
  });

  // 3. Brushed Stainless Steel (RF Shield Can & USB-C)
  const shieldMat = new THREE.MeshStandardMaterial({
    color: 0xcccccc,
    roughness: 0.24,
    metalness: 0.86
  });

  // 4. Black Molded Epoxy (IC Packages & SMT Resistors)
  const chipMat = new THREE.MeshStandardMaterial({
    color: 0x1a1a1a,
    roughness: 0.65,
    metalness: 0.1
  });

  // 5. Ceramic SMT (Capacitors)
  const ceramicCapMat = new THREE.MeshStandardMaterial({
    color: 0xa87c4f, // Classic tan ceramic 0805
    roughness: 0.45,
    metalness: 0.15
  });

  // 6. Glowing Trace Line Material
  const traceLineMat = new THREE.LineBasicMaterial({
    color: 0xdfab35,
    transparent: true,
    opacity: 0.82
  });

  // 7. Dynamic LEDs
  const ledPowerMat = new THREE.MeshStandardMaterial({
    color: 0x10b981,
    emissive: 0x10b981,
    emissiveIntensity: 2.2,
    roughness: 0.2
  });

  const ledActivityMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    emissive: 0xf59e0b,
    emissiveIntensity: 1.8,
    roughness: 0.2
  });

  // --------------------------------------------------------------------------
  // Board Construction
  // --------------------------------------------------------------------------
  // A. Main PCB Body
  const pcbGeo = new THREE.BoxGeometry(3.6, 0.12, 5.4);
  const pcbMesh = new THREE.Mesh(pcbGeo, pcbMat);
  pcbMesh.receiveShadow = true;
  pcbMesh.castShadow = true;
  boardGroup.add(pcbMesh);

  // Beveled Silkscreen White Border Line
  const borderLineGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-1.72, 0.07, -2.62),
    new THREE.Vector3(1.72, 0.07, -2.62),
    new THREE.Vector3(1.72, 0.07, 2.62),
    new THREE.Vector3(-1.72, 0.07, 2.62),
    new THREE.Vector3(-1.72, 0.07, -2.62)
  ]);
  const whiteSilkscreenMat = new THREE.LineBasicMaterial({ color: 0xdedede, transparent: true, opacity: 0.7 });
  const borderLine = new THREE.Line(borderLineGeo, whiteSilkscreenMat);
  boardGroup.add(borderLine);

  // B. 4x Gold-Plated Mounting Vias
  const ringGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.13, 24);
  const holeGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.14, 16);
  const holeMat = new THREE.MeshBasicMaterial({ color: 0x05070a });

  const mountHoles = [
    [-1.52, -2.4],
    [1.52, -2.4],
    [-1.52, 1.55],
    [1.52, 1.55]
  ];

  mountHoles.forEach(([x, z]) => {
    const ring = new THREE.Mesh(ringGeo, enigGoldMat);
    ring.position.set(x, 0, z);
    const hole = new THREE.Mesh(holeGeo, holeMat);
    hole.position.set(x, 0, z);
    boardGroup.add(ring);
    boardGroup.add(hole);
  });

  // C. Dual-Row Gold Header Pins (15 Pins each side)
  const pinGeo = new THREE.BoxGeometry(0.08, 0.42, 0.08);
  const padGeo = new THREE.CylinderGeometry(0.075, 0.075, 0.13, 12);
  const pinCount = 15;
  const pinSpacing = 0.28;
  const pinStart = -1.95;

  for (let side = -1; side <= 1; side += 2) {
    const pinX = side * 1.62;
    for (let i = 0; i < pinCount; i++) {
      const pinZ = pinStart + i * pinSpacing;

      // Vertical Gold Pin
      const pin = new THREE.Mesh(pinGeo, enigGoldMat);
      pin.position.set(pinX, 0.18, pinZ);
      pin.castShadow = true;
      boardGroup.add(pin);

      // Gold Annular Solder Pad
      const pad = new THREE.Mesh(padGeo, enigGoldMat);
      pad.position.set(pinX, 0, pinZ);
      boardGroup.add(pad);
    }
  }

  // D. ESP32-S3 RF Shield Metal Can
  const shieldGeo = new THREE.BoxGeometry(2.1, 0.24, 2.5);
  const shield = new THREE.Mesh(shieldGeo, shieldMat);
  shield.position.set(0, 0.18, -0.65);
  shield.castShadow = true;
  shield.receiveShadow = true;
  boardGroup.add(shield);

  // Laser Etched Label Texture on Shield
  const labelCanvas = document.createElement('canvas');
  labelCanvas.width = 512;
  labelCanvas.height = 512;
  const ctx = labelCanvas.getContext('2d');

  // Background
  ctx.fillStyle = '#b8b8b8';
  ctx.fillRect(0, 0, 512, 512);

  // Engraved Tech Details
  ctx.fillStyle = '#1e242b';
  ctx.font = 'bold 44px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('ESPRESSIF', 256, 120);

  ctx.font = 'bold 52px monospace';
  ctx.fillText('ESP32-S3', 256, 185);

  ctx.font = '32px monospace';
  ctx.fillText('AI & IOT ENGINE', 256, 240);

  ctx.font = '24px monospace';
  ctx.fillStyle = '#334155';
  ctx.fillText('Dual-Core Xtensa LX7 @ 240MHz', 256, 290);
  ctx.fillText('2.4GHz Wi-Fi + Bluetooth 5 (LE)', 256, 330);
  ctx.fillText('UNICTIVE LABS // VERIFIED HW', 256, 375);

  // 2D Matrix code placeholder
  ctx.fillStyle = '#1e242b';
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      if ((r + c) % 2 === 0 || r === 0 || c === 0) {
        ctx.fillRect(206 + c * 20, 410 + r * 15, 14, 11);
      }
    }
  }

  const labelTexture = new THREE.CanvasTexture(labelCanvas);
  const labelMat = new THREE.MeshBasicMaterial({
    map: labelTexture,
    transparent: true,
    opacity: 0.92
  });
  const labelMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.75, 2.05), labelMat);
  labelMesh.rotation.x = -Math.PI / 2;
  labelMesh.position.set(0, 0.31, -0.65);
  boardGroup.add(labelMesh);

  // E. Meandered Inverted-F PCB Antenna (Gold Trace)
  const antGeo = new THREE.BufferGeometry();
  const antPts = [
    new THREE.Vector3(-1.1, 0.07, 1.95),
    new THREE.Vector3(-1.1, 0.07, 2.5),
    new THREE.Vector3(-0.8, 0.07, 2.5),
    new THREE.Vector3(-0.8, 0.07, 2.05),
    new THREE.Vector3(-0.5, 0.07, 2.05),
    new THREE.Vector3(-0.5, 0.07, 2.5),
    new THREE.Vector3(-0.2, 0.07, 2.5),
    new THREE.Vector3(-0.2, 0.07, 2.05),
    new THREE.Vector3(0.1, 0.07, 2.05),
    new THREE.Vector3(0.1, 0.07, 2.5),
    new THREE.Vector3(0.4, 0.07, 2.5),
    new THREE.Vector3(0.4, 0.07, 2.05),
    new THREE.Vector3(0.7, 0.07, 2.05),
    new THREE.Vector3(0.7, 0.07, 2.5),
    new THREE.Vector3(1.1, 0.07, 2.5)
  ];
  antGeo.setFromPoints(antPts);
  const antennaLine = new THREE.Line(antGeo, enigGoldMat);
  boardGroup.add(antennaLine);

  // F. SMT Components (Quartz Crystal, USB-UART Bridge, LDO, Capacitors, Resistors)
  // 1. Quartz Oscillator (40 MHz)
  const oscGeo = new THREE.BoxGeometry(0.55, 0.16, 0.35);
  const osc = new THREE.Mesh(oscGeo, shieldMat);
  osc.position.set(0.65, 0.14, 0.9);
  boardGroup.add(osc);

  // 2. USB-UART Bridge IC (CP2102 / CH343)
  const bridgeGeo = new THREE.BoxGeometry(0.7, 0.12, 0.7);
  const bridge = new THREE.Mesh(bridgeGeo, chipMat);
  bridge.position.set(-0.6, 0.12, 1.1);
  boardGroup.add(bridge);

  // 3. 3.3V LDO Voltage Regulator (SOT-223)
  const ldoGeo = new THREE.BoxGeometry(0.65, 0.14, 0.45);
  const ldo = new THREE.Mesh(ldoGeo, chipMat);
  ldo.position.set(0, 0.13, 1.4);
  boardGroup.add(ldo);

  // 4. Stainless USB-C Connector (Bottom Center)
  const usbGeo = new THREE.BoxGeometry(0.9, 0.34, 1.05);
  const usb = new THREE.Mesh(usbGeo, shieldMat);
  usb.position.set(0, 0.23, 2.4);
  usb.castShadow = true;
  boardGroup.add(usb);

  const usbCavityGeo = new THREE.BoxGeometry(0.7, 0.14, 0.12);
  const usbCavity = new THREE.Mesh(usbCavityGeo, holeMat);
  usbCavity.position.set(0, 0.23, 2.92);
  boardGroup.add(usbCavity);

  // 5. Tactile Push Buttons (BOOT & RESET)
  const btnBaseGeo = new THREE.BoxGeometry(0.32, 0.18, 0.32);
  const btnCapGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.08, 16);

  const btnPositions = [
    [-1.15, 2.1], // BOOT
    [1.15, 2.1]   // RST
  ];

  btnPositions.forEach(([bx, bz]) => {
    const bBase = new THREE.Mesh(btnBaseGeo, shieldMat);
    bBase.position.set(bx, 0.15, bz);
    const bCap = new THREE.Mesh(btnCapGeo, enigGoldMat);
    bCap.position.set(bx, 0.28, bz);
    boardGroup.add(bBase);
    boardGroup.add(bCap);
  });

  // 6. SMD Passive Components (0603/0805 tan & black chips)
  const smdPositions = [
    [-0.2, 0.95, ceramicCapMat, 0.18, 0.1],
    [0.2, 0.95, ceramicCapMat, 0.18, 0.1],
    [-0.2, 1.15, chipMat, 0.16, 0.08],
    [0.2, 1.15, chipMat, 0.16, 0.08],
    [-0.85, 1.45, chipMat, 0.14, 0.08],
    [0.85, 1.45, ceramicCapMat, 0.18, 0.1]
  ];

  smdPositions.forEach(([sx, sz, smat, sw, sd]) => {
    const sGeo = new THREE.BoxGeometry(sw, 0.08, sd);
    const sMesh = new THREE.Mesh(sGeo, smat);
    sMesh.position.set(sx, 0.1, sz);
    boardGroup.add(sMesh);
  });

  // 7. Onboard Status LEDs (Power & Tx/Rx)
  const ledGeo = new THREE.BoxGeometry(0.12, 0.08, 0.16);
  const ledPower = new THREE.Mesh(ledGeo, ledPowerMat);
  ledPower.position.set(-1.15, 0.1, 1.35);
  boardGroup.add(ledPower);

  const ledActivity = new THREE.Mesh(ledGeo, ledActivityMat);
  ledActivity.position.set(-1.15, 0.1, 1.05);
  boardGroup.add(ledActivity);

  // G. Circuit Signal Traces (Orthogonal PCB routing)
  const tracePaths = [
    [[-1.4, 0.07, 0.5], [-0.85, 0.07, 0.5], [-0.85, 0.07, 0.2], [0, 0.07, 0.2]],
    [[1.4, 0.07, 0.8], [0.85, 0.07, 0.8], [0.85, 0.07, 0.3], [0.25, 0.07, 0.3]],
    [[-1.4, 0.07, -0.8], [-1.05, 0.07, -0.8], [-1.05, 0.07, -0.6]],
    [[1.4, 0.07, -0.8], [1.05, 0.07, -0.8], [1.05, 0.07, -0.6]],
    [[-1.4, 0.07, -1.4], [-0.9, 0.07, -1.4], [-0.9, 0.07, -1.0]],
    [[1.4, 0.07, -1.4], [0.9, 0.07, -1.4], [0.9, 0.07, -1.0]],
    [[-0.4, 0.07, 1.6], [-0.4, 0.07, 2.2], [-0.2, 0.07, 2.2]],
    [[0.4, 0.07, 1.6], [0.4, 0.07, 2.2], [0.2, 0.07, 2.2]]
  ];

  tracePaths.forEach((path) => {
    const pts = path.map((p) => new THREE.Vector3(p[0], p[1], p[2]));
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const line = new THREE.Line(geo, traceLineMat);
    boardGroup.add(line);
  });

  // H. Animated Signal Packet Pulses
  const packetCount = 6;
  const packetGeo = new THREE.SphereGeometry(0.045, 12, 12);
  const packetMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });
  const packets = [];

  for (let i = 0; i < packetCount; i++) {
    const pMesh = new THREE.Mesh(packetGeo, packetMat);
    const assignedRoute = tracePaths[i % tracePaths.length];
    packets.push({
      mesh: pMesh,
      route: assignedRoute,
      t: Math.random(),
      speed: 0.008 + Math.random() * 0.006
    });
    boardGroup.add(pMesh);
  }

  // --------------------------------------------------------------------------
  // Interactions, Physics & Telemetry Controls
  // --------------------------------------------------------------------------
  let mouseX = 0;
  let mouseY = 0;
  let targetRotationX = defaultRotX;
  let targetRotationY = defaultRotY;
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };
  let autoOrbit = false;
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

      targetRotationY += deltaX * 0.008;
      targetRotationX += deltaY * 0.008;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    } else if (!autoOrbit && !isUserInteracting) {
      // Smooth subtle cursor tracking
      targetRotationY = defaultRotY + mouseX * 0.42;
      targetRotationX = defaultRotX - mouseY * 0.32;
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
    }, 4000);
  }

  function pulseSignal() {
    goldAccentLight.intensity = 4.2;
    ledActivity.material.emissiveIntensity = 4.5;
    packets.forEach((p) => {
      p.speed = 0.035;
    });

    const statusPill = document.getElementById('labLiveStatus');
    if (statusPill) {
      statusPill.textContent = 'SIGNAL PULSE: 240MHz BURST';
      statusPill.style.color = '#f59e0b';
    }

    setTimeout(() => {
      goldAccentLight.intensity = 1.8;
      ledActivity.material.emissiveIntensity = 1.8;
      packets.forEach((p) => {
        p.speed = 0.008 + Math.random() * 0.006;
      });
      if (statusPill) {
        statusPill.textContent = 'SYS: ESP32-S3 ONLINE';
        statusPill.style.color = '';
      }
    }, 450);
  }

  function resetView() {
    targetRotationX = defaultRotX;
    targetRotationY = defaultRotY;
    autoOrbit = false;
    const orbitBtn = document.getElementById('labBtnOrbit');
    if (orbitBtn) orbitBtn.classList.remove('active');
  }

  function toggleAutoOrbit() {
    autoOrbit = !autoOrbit;
    const orbitBtn = document.getElementById('labBtnOrbit');
    if (orbitBtn) {
      orbitBtn.classList.toggle('active', autoOrbit);
    }
  }

  container.addEventListener('pointermove', onPointerMove, { passive: true });
  container.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointerup', onPointerUp);
  container.addEventListener('click', pulseSignal);
  container.style.cursor = 'grab';

  // Wire UI Controls
  const btnPulse = document.getElementById('labBtnPulse');
  if (btnPulse) btnPulse.addEventListener('click', (e) => { e.stopPropagation(); pulseSignal(); });

  const btnOrbit = document.getElementById('labBtnOrbit');
  if (btnOrbit) btnOrbit.addEventListener('click', (e) => { e.stopPropagation(); toggleAutoOrbit(); });

  const btnReset = document.getElementById('labBtnReset');
  if (btnReset) btnReset.addEventListener('click', (e) => { e.stopPropagation(); resetView(); });

  // --------------------------------------------------------------------------
  // Resize Handling
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
  // Animation Loop
  // --------------------------------------------------------------------------
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    if (!isVisible || document.hidden) return;

    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    if (!reduceMotion) {
      if (autoOrbit) {
        targetRotationY += 0.012;
      }

      // Smooth damping lerp
      boardGroup.rotation.y += (targetRotationY - boardGroup.rotation.y) * 0.065;
      boardGroup.rotation.x += (targetRotationX - boardGroup.rotation.x) * 0.065;

      // Gentle floating levitation
      if (!isDragging) {
        boardGroup.position.y = 0.15 + Math.sin(elapsedTime * 1.5) * 0.08;
      }

      // Activity LED periodic blinking
      const blink = Math.sin(elapsedTime * 9) > 0.35 ? 2.8 : 0.4;
      ledActivity.material.emissiveIntensity = blink;

      // Animate Signal Packets along traces
      packets.forEach((p) => {
        p.t += p.speed;
        if (p.t > 1) p.t = 0;

        const route = p.route;
        const totalSegments = route.length - 1;
        const segIndex = Math.min(Math.floor(p.t * totalSegments), totalSegments - 1);
        const segT = (p.t * totalSegments) - segIndex;

        const p1 = route[segIndex];
        const p2 = route[segIndex + 1];

        p.mesh.position.x = p1[0] + (p2[0] - p1[0]) * segT;
        p.mesh.position.y = p1[1] + (p2[1] - p1[1]) * segT + 0.02;
        p.mesh.position.z = p1[2] + (p2[2] - p1[2]) * segT;
      });
    }

    renderer.render(scene, camera);
  }

  animate();
})();
