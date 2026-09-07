window.PROJECTS_DATA = {
  "linear-position": {
    id: "linear-position",
    tag: "Interactive Embedded System",
    title: "Linear Position Tracking System for Interactive Experience",
    img: "labore.png",
    summary:
      "A real-time embedded tracking system that transforms linear motion into interactive digital input using an ESP32-based controller and rotary encoder.",
    tech: [
      "Embedded C",
      "ESP32",
      "Rotary Encoder",
      "USB Serial",
      "EasyEDA"
    ],
    year: "2025",
    org: "Unictive",
    github: "",
    projectUrl:
      "https://www.linkedin.com/posts/pt-uniktif-media-indonesia_unictive-x-haluu-world-labore-dermalab-2025-activity-7399382418769752064-7s38",

    overview:
      "This project developed a physical-to-digital interaction system that captures linear movement and converts it into real-time input for interactive content. The system was designed to enable seamless synchronization between mechanical movement and digital experiences.",

    howItWorks:
      "A rotary encoder tracks the movement of the linear mechanism and generates position data. The ESP32 processes the encoder signals, calculates movement changes, and transmits the data through USB serial communication to synchronize with the interactive application.",

    contributions: [
      "Designed the embedded architecture for real-time motion tracking",
      "Developed encoder reading and position calculation logic",
      "Implemented serial communication between embedded hardware and host application",
      "Performed calibration and testing to improve tracking accuracy"
    ],

    features: [
      "Real-time linear motion tracking",
      "Physical movement to digital interaction mapping",
      "Low-latency serial communication",
      "Compact embedded hardware integration"
    ],

    challenges: [
      "Maintaining tracking accuracy during continuous mechanical movement",
      "Reducing measurement drift through calibration refinement",
      "Ensuring reliable communication between hardware and software"
    ],

    results: [
      "Successfully delivered a functional motion tracking system for interactive applications",
      "Enabled real-time synchronization between physical movement and digital content",
      "Provided a reliable embedded solution for interactive installation use"
    ],

    gallery: [
      "labore.png"
    ],

    video:
      "https://www.youtube.com/embed/zB8dq26QAPs",

    videoPortrait: true,
  },


  sgm: {
    id: "sgm",
    tag: "AI Computer Vision",
    title: "AI Face Processing and Virtual Makeup System",
    img: "sgm.jpeg",
    summary:
      "An AI-powered facial processing pipeline that enables virtual makeup experiences through real-time face analysis and image enhancement.",

    tech: [
      "Python",
      "GFPGAN",
      "Mediapipe",
      "FastAPI",
      "OpenCV"
    ],

    year: "2025",
    org: "Unictive",
    github: "",

    overview:
      "This project focused on building an AI-powered facial processing system for interactive beauty experiences. The system combines face landmark detection, image enhancement, and virtual makeup processing to create a real-time user interaction.",

    howItWorks:
      "Camera input is analyzed using Mediapipe to detect facial landmarks. The image is enhanced using GFPGAN, then processed with makeup effects before being delivered to the interactive display system.",

    contributions: [
      "Developed the facial processing pipeline",
      "Integrated Mediapipe face tracking and GFPGAN enhancement",
      "Built FastAPI services for AI processing workflow",
      "Optimized inference performance for interactive usage"
    ],

    features: [
      "Real-time facial landmark detection",
      "AI-based image enhancement",
      "Virtual makeup rendering pipeline",
      "API-based system integration"
    ],

    challenges: [
      "Balancing visual quality with real-time processing speed",
      "Maintaining stable performance under different lighting conditions"
    ],

    results: [
      "Delivered a stable AI face processing system for interactive experiences",
      "Supported client-facing beauty technology demonstrations"
    ],

    gallery: [
      "sgm.jpeg"
    ],

    video: "",
  },


  "giias-rmbg": {
    id: "giias-rmbg",
    tag: "AI Computer Vision",
    title: "Real-Time AI Background Removal Photobooth System",
    img: "giias_rmbg.jpg",
    summary:
      "A real-time computer vision system that removes photo backgrounds and creates customized visual experiences for exhibition environments.",

    tech: [
      "Python",
      "PIL",
      "OpenCV",
      "FastAPI"
    ],

    year: "2025",
    org: "Unictive",
    github: "",

    projectUrl:
      "https://www.unictive.com/titan/detail/XPOB",

    overview:
      "This project developed an AI-powered photobooth system for exhibition environments, allowing users to capture photos with automatically removed backgrounds and customized visual compositions.",

    howItWorks:
      "The camera captures user images, which are processed through a segmentation pipeline to separate the subject from the background. The processed image is then combined with selected visuals and displayed instantly.",

    contributions: [
      "Developed the AI background removal pipeline",
      "Built FastAPI services for image processing",
      "Integrated camera capture and display workflow",
      "Optimized system performance for exhibition deployment"
    ],

    features: [
      "Real-time background removal",
      "Custom image compositing",
      "Interactive photobooth workflow",
      "Fast image processing pipeline"
    ],

    challenges: [
      "Maintaining smooth processing speed during live events",
      "Improving subject edge quality for realistic compositing"
    ],

    results: [
      "Successfully deployed for exhibition experiences",
      "Delivered a smooth real-time photo interaction workflow"
    ],

    gallery: [
      "giias_rmbg.jpg",
      "assets/img/projects/gallery/giias-rmbg/dsc09936.jpg",
      "assets/img/projects/gallery/giias-rmbg/img_6138.jpg",
      "assets/img/projects/gallery/giias-rmbg/img_6192.jpg"
    ],

    video:
      "https://www.youtube.com/embed/F72TLEsxbS4",
    videoPortrait: true,
  },


  "giias-footstep": {
    id: "giias-footstep",
    tag: "Interactive Embedded System",
    title: "Interactive Footstep Game Controller System",
    img: "giias_footstep.jpg",
    summary:
      "A physical interaction controller that transforms user footsteps into responsive game inputs for interactive installations.",

    tech: [
      "Embedded C",
      "Arduino Pro Micro",
      "HID Keyboard",
      "Serial Communication"
    ],

    year: "2025",
    org: "Unictive",
    github: "",

    projectUrl:
      "https://www.unictive.com/titan/detail/XPOB",

    overview:
      "This project created a custom footstep-based controller that allows users to interact with games through physical movement. The system was designed for immersive installations where intuitive interaction is essential.",

    howItWorks:
      "Footstep inputs are detected through sensor pads and processed by the microcontroller. The controller then emulates keyboard inputs through HID communication to control the game system.",

    contributions: [
      "Designed footstep detection logic",
      "Implemented HID keyboard emulation",
      "Integrated embedded hardware with game software",
      "Tested system reliability for high-traffic environments"
    ],

    features: [
      "Physical footstep-based interaction",
      "Plug-and-play HID control",
      "Responsive game input system",
      "Durable installation design"
    ],

    challenges: [
      "Reducing false triggers during user interaction",
      "Maintaining responsive input performance in crowded environments"
    ],

    results: [
      "Delivered an intuitive physical game interaction system",
      "Successfully supported interactive exhibition experiences"
    ],

    gallery: [
      "giias_footstep.jpg",
      "assets/img/projects/gallery/giias-footstep/img_6186.jpg",
      "assets/img/projects/gallery/giias-footstep/img_6350.jpg"
    ],

    video:
      "https://www.youtube.com/embed/xHA6Z1qbb5E",
  },


  "giias-arcade": {
    id: "giias-arcade",
    tag: "Interactive Embedded System",
    title: "Wireless Arcade Controller System",
    img: "giias_arcade.jpg",
    summary:
      "A custom arcade-style embedded controller designed for responsive gameplay interaction through wireless connectivity.",

    tech: [
      "Embedded C",
      "ESP32",
      "Bluetooth"
    ],

    year: "2025",
    org: "Unictive",
    github: "",

    projectUrl:
      "https://www.unictive.com/titan/detail/XPOB",

    overview:
      "This project developed a custom arcade controller for interactive game installations, combining physical controls with wireless communication to provide an engaging user experience.",

    howItWorks:
      "Joystick and button inputs are captured by ESP32 firmware and transmitted through Bluetooth communication to the host game system with low-latency response.",

    contributions: [
      "Developed embedded firmware for input processing",
      "Implemented Bluetooth communication",
      "Built and integrated arcade controller hardware",
      "Connected the controller with game-based applications"
    ],

    features: [
      "Arcade-style physical controls",
      "Wireless Bluetooth connectivity",
      "Responsive gameplay input",
      "Custom hardware integration"
    ],

    challenges: [
      "Reducing input latency over wireless communication",
      "Designing reliable hardware for public interaction"
    ],

    results: [
      "Delivered a responsive arcade interaction system",
      "Successfully integrated with client interactive installations"
    ],

    gallery: [
      "giias_arcade.jpg",
      "assets/img/projects/gallery/giias-arcade/img_6189.jpg",
      "assets/img/projects/gallery/giias-arcade/img_6271.jpg"
    ],

    video:
      "https://www.youtube.com/embed/FYcYul-Nbos",
    videoPortrait: true,
  },
  fitbar: {
    id: "fitbar",
    tag: "Interactive Embedded System",
    title: "Rotational Speed Monitoring and Interactive Feedback System",
    img: "fitbar.jpg",
    summary:
      "An embedded monitoring system that detects rotational speed and transforms mechanical movement into real-time visual and physical feedback.",

    tech: [
      "Python",
      "Embedded C",
      "ESP32",
      "Hall Sensor",
      "Relay",
      "MAX7219"
    ],

    year: "2025",
    org: "Unictive",
    github: "",

    projectUrl:
      "https://www.unictive.com/titan/detail/PAQJ",

    overview:
      "This project developed an interactive monitoring system that captures rotational speed from a physical mechanism and presents the data through visual indicators and automated responses.",

    howItWorks:
      "A Hall sensor detects rotational movement and sends pulse data to the ESP32 controller. The system calculates speed values, displays real-time feedback through LED matrices, and triggers physical outputs using relays.",

    contributions: [
      "Developed rotational speed measurement logic using Hall sensors",
      "Implemented ESP32 firmware for sensor processing and control",
      "Integrated MAX7219 LED matrix visualization",
      "Configured relay-based output triggers for interactive responses"
    ],

    features: [
      "Real-time rotational speed monitoring",
      "LED matrix visual feedback",
      "Automated physical output control",
      "Embedded and host system integration"
    ],

    challenges: [
      "Maintaining accurate speed measurement across different rotation speeds",
      "Synchronizing physical events with visual feedback"
    ],

    results: [
      "Delivered a responsive speed monitoring and feedback system",
      "Created an engaging interactive demonstration experience"
    ],

    gallery: [
      "fitbar.jpg",
      "assets/img/projects/gallery/fitbar/img_5731.jpg",
      "assets/img/projects/gallery/fitbar/img_5732.jpg",
      "assets/img/projects/gallery/fitbar/img_5743.jpg"
    ],

    video:
      "https://www.youtube.com/shorts/HoLX4Fy0NQ4",
  },


  "lift-and-learn": {
    id: "lift-and-learn",
    tag: "Interactive Embedded System",
    title: "Load Cell Interactive Display System",
    img: "liftandlearn.jpeg",
    summary:
      "An interactive product experience system that uses weight sensing to trigger real-time digital feedback.",

    tech: [
      "Embedded C",
      "Python",
      "TKinter",
      "ESP32",
      "HX711",
      "Bluetooth"
    ],

    year: "2025",
    org: "Unictive",
    github: "",

    overview:
      "This project created an interactive display experience where physical lifting actions are translated into digital responses. The system uses load cell sensors to measure user interaction and dynamically control displayed content.",

    howItWorks:
      "Load cells measure applied force through the HX711 amplifier module. ESP32 processes the sensor data and sends the information wirelessly to a Python-based interface that updates content based on detected weight values.",

    contributions: [
      "Integrated load cell sensors with HX711 module",
      "Developed ESP32 firmware for weight measurement",
      "Built Python-based interactive display interface",
      "Calibrated sensor thresholds for reliable interaction"
    ],

    features: [
      "Weight-based interaction",
      "Wireless sensor communication",
      "Real-time display updates",
      "Interactive product demonstration workflow"
    ],

    challenges: [
      "Maintaining stable load cell calibration",
      "Filtering sensor noise during user interaction"
    ],

    results: [
      "Delivered a reliable weight-based interactive experience",
      "Successfully supported product demonstration scenarios"
    ],

    gallery: [
      "liftandlearn.jpeg"
    ],

    video:
      "https://www.youtube.com/shorts/EYsW_4lp7N0",
  },


  "presence-detection": {
    id: "presence-detection",
    tag: "Interactive Embedded System",
    title: "Interactive Presence Detection System",
    img: "haluuxbintang_presence.jpg",
    summary:
      "A proximity-based embedded system that detects user presence and automatically activates interactive digital experiences.",

    tech: [
      "Embedded C",
      "ESP32",
      "HTTP",
      "Ultrasonic Sensor"
    ],

    year: "2025",
    org: "Unictive",
    github: "",

    projectUrl:
      "https://www.unictive.com/titan/detail/IOAE",

    overview:
      "This project developed an automated interaction trigger system that detects user presence and connects physical surroundings with digital content activation.",

    howItWorks:
      "Ultrasonic sensors measure user distance and send detection data to the ESP32 controller. The system evaluates proximity conditions and communicates with the host application through HTTP requests to trigger content.",

    contributions: [
      "Implemented ultrasonic-based presence detection",
      "Developed ESP32 logic for proximity processing",
      "Integrated HTTP communication with host systems",
      "Adjusted detection zones based on installation requirements"
    ],

    features: [
      "Automatic presence-based activation",
      "Configurable detection range",
      "HTTP API integration",
      "Real-time interaction triggering"
    ],

    challenges: [
      "Reducing false detections in crowded environments",
      "Optimizing detection range for installation layout"
    ],

    results: [
      "Enabled automatic content activation based on user presence",
      "Improved user engagement through seamless interaction"
    ],

    gallery: [
      "haluuxbintang_presence.jpg"
    ],

    video:
      "https://www.youtube.com/shorts/EnHvPIwf-No",
  },


  "sequential-control": {
    id: "sequential-control",
    tag: "Interactive Embedded System",
    title: "Interactive Installation Sequential Control System",
    img: "haluuxbintang_button.jpg",
    summary:
      "An embedded control system that manages multi-step interactive experiences through synchronized hardware triggers.",

    tech: [
      "Embedded C",
      "ESP32",
      "HTTP",
      "Solid State Relay"
    ],

    year: "2025",
    org: "Unictive",
    github: "",

    projectUrl:
      "https://www.unictive.com/titan/detail/IOAE",

    overview:
      "This project developed a sequence-based controller for interactive installations, enabling users to trigger coordinated hardware responses through a structured interaction flow.",

    howItWorks:
      "User inputs are processed by the ESP32 controller, which executes predefined sequences and communicates with connected hardware through solid state relays and HTTP-based commands.",

    contributions: [
      "Designed sequential interaction logic",
      "Integrated solid state relay control",
      "Implemented communication between embedded system and host application",
      "Tested timing synchronization across multiple outputs"
    ],

    features: [
      "Multi-step interaction sequence",
      "Hardware output synchronization",
      "Relay-based device control",
      "Event-driven interaction flow"
    ],

    challenges: [
      "Maintaining accurate timing between multiple outputs",
      "Ensuring reliable operation during repeated interaction cycles"
    ],

    results: [
      "Delivered a smooth multi-stage interactive experience",
      "Provided reliable hardware control for installation environments"
    ],

    gallery: [
      "haluuxbintang_button.jpg"
    ],

    video:
      "https://www.youtube.com/shorts/gtmq3XGj05I",
  },


  wardah: {
    id: "wardah",
    tag: "AI Computer Vision",
    title: "Real-Time Object Detection Interactive Game System",
    img: "wardah_1.jpg",
    summary:
      "A computer vision-powered interactive game that recognizes real-world objects and converts them into gameplay interactions.",

    tech: [
      "Python",
      "OpenCV",
      "YOLO",
      "Roboflow",
      "Flask"
    ],

    year: "2024",
    org: "Unictive",
    github: "",

    projectUrl:
      "https://www.unictive.com/titan/detail/NORQ",

    overview:
      "This project developed an AI-powered game experience where players interact with physical objects detected through a custom computer vision model.",

    howItWorks:
      "A camera captures the environment and processes frames using a YOLO object detection model trained with Roboflow. Detected objects are sent to the Flask backend to trigger game events in real time.",

    contributions: [
      "Trained and deployed custom YOLO detection models",
      "Developed Flask backend for game interaction logic",
      "Integrated real-time camera processing pipeline",
      "Optimized detection performance for interactive gameplay"
    ],

    features: [
      "Custom object detection model",
      "Real-time game event triggering",
      "Computer vision-based interaction",
      "Web-based game interface"
    ],

    challenges: [
      "Maintaining detection accuracy under different lighting conditions",
      "Reducing latency between detection and gameplay response"
    ],

    results: [
      "Delivered an AI-powered interactive game experience",
      "Enabled real-time interaction between physical objects and digital gameplay"
    ],

    gallery: [
      "wardah_1.jpg"
    ],

    video: "",
  },
  savibot: {
    id: "savibot",
    tag: "AI Integrated Robotics",
    title: "SAVI - AI Voice Assistant for Autonomous Vehicle Control",
    img: "savi.jpg",

    summary:
      "An AI-powered vehicle interaction system that combines natural language processing with embedded control for intelligent vehicle operation.",

    tech: [
      "Python",
      "Embedded C",
      "Arduino Mega",
      "BERT",
      "Flask",
      "TensorFlow"
    ],

    year: "2022-2023",
    org: "Universitas Padjadjaran",

    github:
      "https://github.com/Handepp/SAVIBot-Virtual-Assistant-Bot-for-Interaction-and-Control-of-Smart-Vehicles-BERT-FLASK",

    overview:
      "SAVI is an intelligent vehicle assistant that integrates a BERT-based natural language processing model with embedded hardware control. The system enables users to interact with the vehicle through conversational commands.",

    howItWorks:
      "User commands are processed through a BERT-based intent classification model. The Flask backend translates recognized commands into vehicle actions, which are then executed by the Arduino-based embedded controller.",

    contributions: [
      "Developed NLP-based command processing workflow",
      "Integrated BERT model with Flask backend",
      "Implemented embedded vehicle control communication",
      "Designed web-based interaction interface"
    ],

    features: [
      "Natural language command processing",
      "AI-based vehicle interaction",
      "Embedded motor control integration",
      "Web-based control interface"
    ],

    challenges: [
      "Improving consistency of intent recognition",
      "Mapping human language commands into reliable vehicle actions"
    ],

    results: [
      "Developed a functional AI-assisted vehicle control prototype",
      "Demonstrated integration between AI, web systems, and embedded hardware"
    ],

    gallery: [
      "savi.jpg",
      "savi2.png",
      "assets/img/projects/gallery/savibot/savi_1.jpg",
      "assets/img/projects/gallery/savibot/savi_2.jpg"
    ],

    video:
      "https://www.youtube.com/shorts/1xyPHF3GQdo",
  },


  "iot-syergie": {
    id: "iot-syergie",
    tag: "IoT & Connected Systems",
    title: "IoT Monitoring and Control Dashboard System",
    img: "gui_syergie.jpg",

    summary:
      "An IoT-based monitoring and control platform that connects embedded sensors with a real-time graphical dashboard.",

    tech: [
      "Embedded C",
      "ESP32",
      "MQTT",
      "PyQt",
      "QML"
    ],

    year: "2022",
    org: "PT Syergie Indo Prima",

    github:
      "https://github.com/Handepp/GUI-Waterflow-DHT11-Motor-DC-QML",

    overview:
      "This internship project focused on developing an IoT monitoring system that collects environmental and device data, then visualizes and controls connected hardware through a graphical interface.",

    howItWorks:
      "ESP32 collects sensor readings and publishes data through MQTT communication. The desktop dashboard receives the data, displays real-time information, and provides control commands for connected devices.",

    contributions: [
      "Developed MQTT communication workflow",
      "Built graphical monitoring interface using QML",
      "Integrated sensors and actuator hardware",
      "Connected embedded devices with monitoring dashboard"
    ],

    features: [
      "Real-time IoT monitoring",
      "MQTT-based communication",
      "Graphical dashboard visualization",
      "Sensor and actuator control"
    ],

    challenges: [
      "Maintaining reliable message communication",
      "Ensuring responsive dashboard updates"
    ],

    results: [
      "Delivered an operational IoT monitoring prototype",
      "Demonstrated connected sensor and control architecture"
    ],

    gallery: [
      "gui_syergie.jpg",
      "assets/img/projects/gallery/iot-syergie/dc1.jpg",
      "assets/img/projects/gallery/iot-syergie/gui_head_2.jpg",
      "assets/img/projects/gallery/iot-syergie/menit_2.jpg",
      "assets/img/projects/gallery/iot-syergie/ruangan_normal.jpg"
    ],

    video: "",
  },


  bestibot: {
    id: "bestibot",
    tag: "AI Natural Language Processing",
    title: "BestiBot - Mental Health Support Chatbot using BERT",
    img: "Bestibot.png",

    summary:
      "A conversational AI chatbot that uses natural language processing to provide context-aware responses through a web interface.",

    tech: [
      "Python",
      "BERT",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript"
    ],

    year: "2022",
    org: "Orbit Future Academy",

    github:
      "https://github.com/Handepp/BestiBot-Chatbot-Flask",

    overview:
      "BestiBot is a chatbot project that explores the use of BERT-based natural language processing for creating a conversational support system with a web-based interface.",

    howItWorks:
      "User messages are processed by the BERT model to identify intent and generate appropriate responses. Flask manages backend communication between the AI model and the web chat interface.",

    contributions: [
      "Integrated BERT NLP model with Flask backend",
      "Developed chatbot web interface",
      "Designed conversation flow and response handling"
    ],

    features: [
      "BERT-based language understanding",
      "Web chatbot interface",
      "Intent-based response generation"
    ],

    challenges: [
      "Handling conversational context and user intent variations"
    ],

    results: [
      "Developed a functional AI chatbot prototype",
      "Demonstrated practical NLP implementation through a web application"
    ],

    gallery: [
      "Bestibot.png",
      "assets/img/projects/gallery/bestibot/bestibot_5.jpg",
      "assets/img/projects/gallery/bestibot/bestibot_6.jpg",
      "assets/img/projects/gallery/bestibot/bestibot_6_2.jpg",
      "assets/img/projects/gallery/bestibot/bestibot_7.jpg"
    ],

    video: "",
  },


  "face-recognition": {
    id: "face-recognition",
    tag: "AI Computer Vision",
    title: "Face Recognition Security Access System",
    img: "facerecog.png",

    summary:
      "A computer vision-based access control prototype that uses facial recognition to identify registered users.",

    tech: [
      "Python",
      "OpenCV",
      "Haar Cascade",
      "LBPH"
    ],

    year: "2021",
    org: "Universitas Padjadjaran",

    github: "",

    overview:
      "This university project explored computer vision techniques for building a face recognition-based security access system.",

    howItWorks:
      "The system detects faces using Haar Cascade and recognizes registered users through an LBPH recognition model to determine access permission.",

    contributions: [
      "Implemented face detection pipeline",
      "Trained and configured LBPH recognition model",
      "Developed access control logic"
    ],

    features: [
      "Face detection",
      "Face recognition",
      "Automated access control"
    ],

    challenges: [
      "Maintaining recognition accuracy under different face angles and conditions"
    ],

    results: [
      "Successfully developed a working face recognition security prototype",
      "Applied computer vision concepts to access control scenarios"
    ],

    gallery: [
      "facerecog.png"
    ],

    video: "",
  },


  "handwashing-station": {
    id: "handwashing-station",
    tag: "Embedded System",
    title: "Automatic Contactless Handwashing Station",
    img: "keran.png",

    summary:
      "An embedded automation system that enables touchless water control using infrared-based hand detection.",

    tech: [
      "Embedded C",
      "Arduino Mega",
      "Infrared Sensor",
      "Solenoid Valve"
    ],

    year: "2021",
    org: "Universitas Padjadjaran",

    github: "",

    overview:
      "This project developed a contactless handwashing system that automates water flow control using sensor-based detection for improved hygiene.",

    howItWorks:
      "An infrared sensor detects hand presence and sends signals to the Arduino controller. The microcontroller activates the solenoid valve for a configured duration before automatically stopping the water flow.",

    contributions: [
      "Designed sensor-based automation logic",
      "Integrated solenoid valve control",
      "Developed Arduino firmware"
    ],

    features: [
      "Touchless activation",
      "Automatic water flow control",
      "Low-cost embedded automation"
    ],

    challenges: [
      "Improving hand detection reliability",
      "Calibrating water flow timing"
    ],

    results: [
      "Developed a functional automatic handwashing prototype",
      "Demonstrated embedded automation for hygiene applications"
    ],

    gallery: [
      "keran.png",
      "assets/img/projects/gallery/handwashing-station/keran_2.jpg",
      "assets/img/projects/gallery/handwashing-station/keran_3.jpg"
    ],

    video: "",
  },


  "smart-glove": {
    id: "smart-glove",
    tag: "Assistive Embedded System",
    title: "Ultrasonic Smart Glove for Obstacle Detection",
    img: "sarung.png",

    summary:
      "A wearable assistive device that uses ultrasonic sensing to detect obstacles and provide proximity feedback.",

    tech: [
      "Embedded C",
      "Arduino Uno",
      "Ultrasonic Sensor",
      "Buzzer"
    ],

    year: "2021",
    org: "Universitas Padjadjaran",

    github: "",

    overview:
      "This project developed a wearable assistive device designed to help visually impaired users detect nearby obstacles through sensor-based feedback.",

    howItWorks:
      "Ultrasonic sensors measure surrounding distances and send data to the Arduino controller. The system converts distance information into buzzer feedback patterns based on obstacle proximity.",

    contributions: [
      "Designed wearable sensor arrangement",
      "Implemented distance-to-feedback conversion logic",
      "Developed Arduino firmware"
    ],

    features: [
      "Obstacle distance detection",
      "Audio proximity feedback",
      "Wearable embedded design"
    ],

    challenges: [
      "Balancing detection sensitivity and false alarms",
      "Designing compact wearable hardware"
    ],

    results: [
      "Created a functional assistive technology prototype",
      "Applied embedded sensing for accessibility support"
    ],

    gallery: [
      "sarung.png"
    ],

    video: "",
  },
};

window.PROJECTS_ORDER = [
  "linear-position",
  "sgm",
  "giias-rmbg",
  "giias-footstep",
  "giias-arcade",
  "fitbar",
  "lift-and-learn",
  "presence-detection",
  "sequential-control",
  "wardah",
  "savibot",
  "iot-syergie",
  "bestibot",
  "face-recognition",
  "handwashing-station",
  "smart-glove",
];
