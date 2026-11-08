window.PROJECTS_DATA = {
  "linear-position": {
    id: "linear-position",
    tag: "Interactive Embedded System",
    categories: ["interactive","embedded"],
    title: "Linear Position Tracking System for Interactive Experience",
    img: "labore.webp",
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
      "labore.webp",
      "assets/img/projects/gallery/linear-position/byd/slider_byd.webp"
    ],

    clientDeployments: [
      {
        endClient: "Labore",
        event: "Labore Dermalab Experience"
      },
      {
        endClient: "BYD",
        event: "BYD M6 DM Launching and Tech-Culture Fest",
        video: "https://youtube.com/shorts/PBT_386hxmE"
      }
    ],

    video:
      "https://www.youtube.com/embed/zB8dq26QAPs",

    videoPortrait: true,
  },


  sgm: {
    id: "sgm",
    tag: "AI Computer Vision",
    categories: ["ai","interactive"],
    title: "AI Face Processing and Virtual Makeup System",
    img: "sgm.webp",
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
      "sgm.webp"
    ],

    clientDeployments: [],

    video: "",
  },


  "giias-rmbg": {
    id: "giias-rmbg",
    tag: "AI Computer Vision",
    categories: ["ai","interactive"],
    title: "Real-Time AI Background Removal Photobooth System",
    img: "giias_rmbg.webp",
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
      "giias_rmbg.webp",
      "assets/img/projects/gallery/giias-rmbg/dsc09936.webp",
      "assets/img/projects/gallery/giias-rmbg/img_6138.webp",
      "assets/img/projects/gallery/giias-rmbg/img_6192.webp"
    ],

    clientDeployments: [
      {
        endClient: "Daihatsu",
        event: "Daihatsu GIIAS 2025"
      }
    ],

    video:
      "https://www.youtube.com/embed/F72TLEsxbS4",
    videoPortrait: true,
  },


  "giias-footstep": {
    id: "giias-footstep",
    tag: "Interactive Embedded System",
    categories: ["interactive","embedded"],
    title: "Interactive Footstep Game Controller System",
    img: "giias_footstep.webp",
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
      "giias_footstep.webp",
      "assets/img/projects/gallery/giias-footstep/img_6186.webp",
      "assets/img/projects/gallery/giias-footstep/img_6350.webp"
    ],

    clientDeployments: [
      {
        endClient: "Daihatsu",
        event: "Daihatsu GIIAS 2025"
      }
    ],

    video:
      "https://www.youtube.com/embed/xHA6Z1qbb5E",
  },


  "giias-arcade": {
    id: "giias-arcade",
    tag: "Interactive Embedded System",
    categories: ["interactive","embedded"],
    title: "Bluetooth Arcade Controller System",
    img: "giias_arcade.webp",
    summary:
      "A custom arcade-style embedded controller designed for responsive gameplay interaction through Bluetooth connectivity.",

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
      "This project developed a custom arcade controller for interactive game installations, combining physical controls with Bluetooth communication to provide an engaging user experience.",

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
      "Reducing input latency over Bluetooth communication",
      "Designing reliable hardware for public interaction"
    ],

    results: [
      "Delivered a responsive arcade interaction system",
      "Successfully integrated with client interactive installations"
    ],

    gallery: [
      "giias_arcade.webp",
      "assets/img/projects/gallery/giias-arcade/img_6189.webp",
      "assets/img/projects/gallery/giias-arcade/img_6271.webp"
    ],

    clientDeployments: [
      {
        endClient: "Daihatsu",
        event: "Daihatsu GIIAS 2025"
      }
    ],

    video:
      "https://www.youtube.com/embed/FYcYul-Nbos",
    videoPortrait: true,
  },
  fitbar: {
    id: "fitbar",
    tag: "Interactive Embedded System",
    categories: ["interactive","embedded"],
    title: "Rotational Speed Monitoring and Interactive Feedback System",
    img: "fitbar.webp",
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
      "fitbar.webp",
      "assets/img/projects/gallery/fitbar/img_5731.webp",
      "assets/img/projects/gallery/fitbar/img_5732.webp",
      "assets/img/projects/gallery/fitbar/img_5743.webp"
    ],

    clientDeployments: [
      {
        endClient: "Fitbar",
        event: "House of Goodness"
      }
    ],

    video:
      "https://www.youtube.com/shorts/HoLX4Fy0NQ4",
  },


  "lift-and-learn": {
    id: "lift-and-learn",
    tag: "Interactive Embedded System",
    categories: ["interactive","embedded"],
    title: "Load Cell Interactive Display System",
    img: "liftandlearn.webp",
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
      "liftandlearn.webp"
    ],

    clientDeployments: [
      {
        endClient: "BAT",
        event: ""
      }
    ],

    video:
      "https://www.youtube.com/shorts/EYsW_4lp7N0",
  },


  "presence-detection": {
    id: "presence-detection",
    tag: "Interactive Embedded System",
    categories: ["interactive","embedded"],
    title: "Interactive Presence Detection System",
    img: "haluuxbintang_presence.webp",
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
      "haluuxbintang_presence.webp"
    ],

    clientDeployments: [
      {
        endClient: "Bir Bintang",
        event: "Dunia Tanpa Syarat"
      }
    ],

    video:
      "https://www.youtube.com/shorts/EnHvPIwf-No",
  },


  "sequential-control": {
    id: "sequential-control",
    tag: "Interactive Embedded System",
    categories: ["interactive","embedded"],
    title: "Interactive Installation Sequential Control System",
    img: "haluuxbintang_button.webp",
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
      "haluuxbintang_button.webp"
    ],

    clientDeployments: [
      {
        endClient: "Bir Bintang",
        event: "Dunia Tanpa Syarat"
      }
    ],

    video:
      "https://www.youtube.com/shorts/gtmq3XGj05I",
  },


  wardah: {
    id: "wardah",
    tag: "AI Computer Vision",
    categories: ["ai","interactive"],
    title: "Real-Time Object Detection Interactive Game System",
    img: "wardah_1.webp",
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
      "wardah_1.webp"
    ],

    clientDeployments: [
      {
        endClient: "Wardah",
        event: "Bigger Better Challenge"
      }
    ],

    video: "",
  },
  savibot: {
    id: "savibot",
    tag: "AI Integrated Robotics",
    categories: ["ai","embedded"],
    title: "SAVI - AI Voice Assistant for Autonomous Vehicle Control",
    img: "savi.webp",

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
      "savi.webp",
      "savi2.webp",
      "assets/img/projects/gallery/savibot/savi_1.webp",
      "assets/img/projects/gallery/savibot/savi_2.webp"
    ],

    video:
      "https://www.youtube.com/shorts/1xyPHF3GQdo",
  },


  "iot-syergie": {
    id: "iot-syergie",
    tag: "IoT & Connected Systems",
    categories: ["embedded"],
    title: "IoT Monitoring and Control Dashboard System",
    img: "gui_syergie.webp",

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
      "gui_syergie.webp",
      "assets/img/projects/gallery/iot-syergie/dc1.webp",
      "assets/img/projects/gallery/iot-syergie/gui_head_2.webp",
      "assets/img/projects/gallery/iot-syergie/menit_2.webp",
      "assets/img/projects/gallery/iot-syergie/ruangan_normal.webp"
    ],

    video: "",
  },


  bestibot: {
    id: "bestibot",
    tag: "AI Natural Language Processing",
    categories: ["ai"],
    title: "BestiBot - Mental Health Support Chatbot using BERT",
    img: "Bestibot.webp",

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
      "Bestibot.webp",
      "assets/img/projects/gallery/bestibot/bestibot_5.webp",
      "assets/img/projects/gallery/bestibot/bestibot_6.webp",
      "assets/img/projects/gallery/bestibot/bestibot_6_2.webp",
      "assets/img/projects/gallery/bestibot/bestibot_7.webp"
    ],

    video: "",
  },


  "house-price-prediction": {
    id: "house-price-prediction",
    tag: "Machine Learning & Web Deployment",
    categories: ["ai"],
    title: "House Price Prediction Web Interface using Flask & Scikit-Learn",
    img: "house_prediction.jpg",

    summary:
      "An interactive web-based machine learning application that predicts residential property prices in real time using a trained K-Nearest Neighbors regression model and Flask backend.",

    tech: [
      "Python",
      "Flask",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Joblib",
      "jQuery",
      "Bootstrap"
    ],

    year: "2022",
    org: "Orbit Future Academy",

    github:
      "https://github.com/Handepp/House-Price-Prediction-Web-Interface-Flask",

    overview:
      "Developed as part of the AI Domain Deployment curriculum at Orbit Future Academy (AI Mastery - Kampus Merdeka Batch 3 by Team Ewako 5). The application enables prospective home buyers to estimate property prices by adjusting intuitive sliders for physical housing dimensions and receiving immediate price evaluations.",

    howItWorks:
      "A regression model was trained on property transaction datasets using scikit-learn's K-Nearest Neighbors algorithm. The model was serialized with Joblib and served via a Flask REST API. When users adjust specifications on the web interface, an asynchronous AJAX request sends the features (building area, land area, bedrooms, bathrooms, and garage) to the server, returning price estimations and housing tier visuals without page reload.",

    contributions: [
      "Developed Flask backend routing and asynchronous prediction REST API endpoint",
      "Integrated trained scikit-learn KNN regression model for live inference",
      "Built responsive web interface with dynamic range sliders and real-time calculation display",
      "Implemented output tier classification logic (affordable, moderate, and luxury housing)"
    ],

    features: [
      "Interactive multi-parameter property specification sliders",
      "Instantaneous price estimation powered by KNN regression",
      "Automated visual categorization based on price thresholds",
      "Asynchronous client-server communication via jQuery AJAX and Flask"
    ],

    challenges: [
      "Ensuring consistent feature normalization and schema between offline training data and live API input",
      "Providing responsive UI feedback during continuous slider value adjustments"
    ],

    results: [
      "Successfully deployed an end-to-end machine learning web service for property valuation",
      "Completed practical AI domain deployment coursework with Team Ewako 5 at Orbit Future Academy"
    ],

    gallery: [
      "house_prediction.jpg",
      "assets/img/projects/gallery/house-prediction/rumah_2.jpg",
      "assets/img/projects/gallery/house-prediction/rumah_3.jpg",
      "assets/img/projects/gallery/house-prediction/rumah_sederhana.jpeg"
    ],

    video: "",
  },


  "hdi-prediction": {
    id: "hdi-prediction",
    tag: "Machine Learning & Data Science",
    categories: ["ai"],
    title: "Human Development Index (IPM) Prediction using Ensemble & Non-Ensemble Algorithms",
    img: "hdi_prediction.png",

    summary:
      "A comparative machine learning study evaluating ensemble (Random Forest, AdaBoost) and non-ensemble (KNN, Decision Tree) algorithms to predict Indonesia's Human Development Index tiers with up to 97.45% accuracy.",

    tech: [
      "Python",
      "Scikit-Learn",
      "Random Forest",
      "Decision Tree",
      "KNN",
      "AdaBoost",
      "Pandas",
      "NumPy",
      "Seaborn",
      "Matplotlib"
    ],

    year: "2022",
    org: "Orbit Future Academy",

    github:
      "https://github.com/Handepp/Human-development-index-prediction-using-ensemble-and-non-ensemble-decision-tree-knn-technique",

    overview:
      "Developed as part of the Data Science curriculum at Orbit Future Academy (Kelas Ewako). The project benchmarks non-ensemble and ensemble machine learning algorithms to classify regional Human Development Index (Indeks Pembangunan Manusia / IPM) in Indonesia based on socioeconomic indicators: Expected Years of Schooling, Mean Years of Schooling, Per Capita Expenditure, and Life Expectancy.",

    howItWorks:
      "The dataset comprising 2,196 regional records from BPS was preprocessed, cleaned of anomalies, standardized, and split into 75% training and 25% testing sets. Four distinct algorithms were implemented and trained: K-Nearest Neighbors (k=5, Euclidean metric), Decision Tree (Gini impurity criterion), AdaBoost (50 estimators), and Random Forest (100 estimators). Models were evaluated using precision, recall, F1-score, and overall classification accuracy.",

    contributions: [
      "Conducted comprehensive Exploratory Data Analysis (EDA) on 2,196 BPS socioeconomic records",
      "Implemented feature standardization, correlation analysis, and data mapping for multi-class classification",
      "Trained and fine-tuned four machine learning architectures across ensemble and non-ensemble paradigms",
      "Performed comparative performance benchmarking and classification metric reporting"
    ],

    features: [
      "Multi-model comparative benchmark: Random Forest vs. Decision Tree vs. KNN vs. AdaBoost",
      "Detailed statistical EDA with pairwise distribution and correlation heatmaps",
      "Classification across Human Development Index tiers (Low, Medium, High, Very High)",
      "Standardized feature pipeline resilient to outliers and disparate indicator scales"
    ],

    challenges: [
      "Handling skewed feature distributions and outliers in regional socioeconomic spending data",
      "Preventing class imbalance bias across extreme low and high HDI classifications in AdaBoost"
    ],

    results: [
      "Achieved 97.45% classification accuracy with Random Forest, emerging as the top-performing model",
      "Demonstrated that ensemble bagging (Random Forest) significantly outperformed boosting and standalone trees for regional demographic prediction"
    ],

    gallery: [
      "hdi_prediction.png",
      "assets/img/projects/gallery/hdi-prediction/hdi_correlation_heatmap.png",
      "assets/img/projects/gallery/hdi-prediction/hdi_distribution.png",
      "assets/img/projects/gallery/hdi-prediction/hdi_feature_hls.png"
    ],

    video: "",
  },


  "emotion-detection": {
    id: "emotion-detection",
    tag: "Natural Language Processing & Deep Learning",
    categories: ["ai"],
    title: "Indonesian Tweet Emotion Classification: Classical ML vs. Transfer Learning BERT",
    img: "emotion_detection.png",

    summary:
      "An end-to-end NLP comparative study classifying 4,401 Indonesian tweets into five emotion classes (anger, joy, sadness, fear, love), comparing classical ML models against a fine-tuned BERT transformer reaching 98.05% validation accuracy.",

    tech: [
      "Python",
      "PyTorch",
      "BERT",
      "Hugging Face",
      "TF-IDF",
      "Scikit-Learn",
      "Sastrawi",
      "Logistic Regression",
      "Naive Bayes",
      "Pandas"
    ],

    year: "2022",
    org: "Orbit Future Academy",

    github:
      "https://github.com/Handepp/Emotion-detection-indonesian-tweet-with-machine-learning-and-transfer-learning-BERT",

    overview:
      "A natural language processing project that classifies nuanced emotional states in Indonesian social media text across five distinct categories: anger, joy, sadness, fear, and love. The study investigates the performance gap between classical machine learning approaches (TF-IDF + Chi-Square with NB, SVM, KNN, DT, and Logistic Regression) and modern transformer-based Transfer Learning using fine-tuned BERT architecture.",

    howItWorks:
      "A corpus of 4,401 Indonesian tweets was cleansed through text normalization (slang word dictionary mapping, case folding, regex cleaning, and Sastrawi stemming). For classical ML, features were extracted with N-gram TF-IDF and selected using Chi-Square. For deep learning, tweets were tokenized with BERT WordPiece tokenizer with special [CLS]/[SEP] tokens, positional embeddings, and attention masks. The BERT model was fine-tuned with AdamW optimizer, categorical cross-entropy, and learning rate scheduling.",

    contributions: [
      "Engineered an Indonesian NLP preprocessing pipeline including slang word mapping and Sastrawi root stemming",
      "Constructed TF-IDF feature extraction and Chi-Square statistical feature selection pipelines",
      "Benchmarked five classical ML classifiers: Logistic Regression (67.08%), Multinomial NB (61.41%), Gaussian NB, DT, and KNN",
      "Implemented BERT transformer transfer learning architecture, achieving 98.05% validation accuracy with minimal loss (0.0695)"
    ],

    features: [
      "5-class Indonesian emotion classification: Anger (1,101), Joy (1,017), Sadness (997), Fear (649), Love (637)",
      "Comparative evaluation highlighting a +30.97% accuracy jump from Logistic Regression (67.08%) to BERT (98.05%)",
      "Learning curve analysis tracking training loss convergence and validation accuracy across epochs",
      "Exported trained PyTorch/TensorFlow weights ready for inference deployment"
    ],

    challenges: [
      "Normalizing informal Indonesian slang, colloquial grammar, and typographical variations common on Twitter",
      "Resolving semantic ambiguities between overlapping emotional tones that classical Bag-of-Words/TF-IDF models failed to capture"
    ],

    results: [
      "Fine-tuned BERT achieved 98.05% validation accuracy, outperforming all classical machine learning baselines",
      "Demonstrated the efficacy of contextual transformer attention for low-resource and informal Indonesian NLP tasks"
    ],

    gallery: [
      "emotion_detection.png",
      "assets/img/projects/gallery/emotion-detection/bert_loss_curve.png",
      "assets/img/projects/gallery/emotion-detection/emotion_distribution.png",
      "assets/img/projects/gallery/emotion-detection/bert_token_distribution.png"
    ],

    video: "",
  },


  "densenet-animals": {
    id: "densenet-animals",
    tag: "Computer Vision & Deep Learning",
    categories: ["ai"],
    title: "4-Class Animal Image Classification: DenseNet-201 Optimizer Benchmark",
    img: "densenet_animals.jpg",

    summary:
      "A deep transfer learning study benchmarking six optimizers (SGD, RMSprop, Adagrad, Adamax, Adadelta, Adam) on DenseNet-201 to classify animal images (deer, dog, horse, cat), achieving 97.50% validation accuracy with SGD.",

    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "DenseNet-201",
      "Transfer Learning",
      "Computer Vision",
      "SGD",
      "Adam",
      "Matplotlib",
      "NumPy"
    ],

    year: "2022",
    org: "Orbit Future Academy",

    github:
      "https://github.com/Handepp/Classification-of-4-animals-using-DenseNet201-with-various-optimizers",

    overview:
      "Developed as part of the Deep Learning & Computer Vision track at Orbit Future Academy (Kelas Ewako). The project explores transfer learning performance on a 4-class animal dataset (deer, dog, horse, and cat) using DenseNet-201 architecture across six different optimization algorithms to analyze training dynamics, convergence speed, and generalization accuracy.",

    howItWorks:
      "A pre-trained DenseNet-201 convolutional neural network was fine-tuned on 2,800 animal images. Six separate training runs were conducted under identical epoch and batch schedules, varying only the optimizer: SGD with momentum, RMSprop, Adagrad, Adamax, Adadelta, and Adam. Training/validation loss and accuracy trajectories were tracked and visualized to identify the optimal optimization strategy.",

    contributions: [
      "Constructed image data augmentation and pipeline loading for 2,800 multi-class animal images",
      "Fine-tuned pre-trained DenseNet-201 transfer learning architecture in TensorFlow/Keras",
      "Implemented and tested six distinct optimizers: SGD, RMSprop, Adagrad, Adamax, Adadelta, and Adam",
      "Analyzed learning curves and generated final competition-style test predictions"
    ],

    features: [
      "4-class animal classification pipeline covering deer, dog, horse, and cat",
      "Rigorous 6-optimizer empirical benchmark with convergence and loss curve tracking",
      "DenseNet-201 dense connection feature reuse preventing gradient vanishing",
      "Automated test prediction generation and submission pipeline"
    ],

    challenges: [
      "Mitigating overfitting on complex high-dimensional CNN feature maps across varying learning rates",
      "Stabilizing adaptive gradient optimizers (RMSprop/Adadelta) which struggled with plateau convergence"
    ],

    results: [
      "SGD achieved the highest validation accuracy of 97.50% with low validation loss (0.0778), demonstrating superior generalization",
      "Adagrad (96.43%) and Adamax (96.25%) also achieved strong competitive stability on DenseNet-201"
    ],

    gallery: [
      "densenet_animals.jpg",
      "assets/img/projects/gallery/densenet-animals/densenet_sgd_accuracy.png",
      "assets/img/projects/gallery/densenet-animals/densenet_sgd_loss.png",
      "assets/img/projects/gallery/densenet-animals/densenet_class_distribution.png"
    ],

    video: "",
  },


  "qlearning-navigation": {
    id: "qlearning-navigation",
    tag: "Reinforcement Learning & Robotics",
    categories: ["ai"],
    title: "Autonomous Medical Robot Navigation Simulation with Q-Learning",
    img: "qlearning_navigation.jpg",

    summary:
      "A reinforcement learning simulation implementing tabular Q-Learning for an autonomous medical robot navigating a 7x7 hospital ward grid environment with 12 dynamic/static obstacles to reach patient disinfection targets.",

    tech: [
      "Python",
      "Reinforcement Learning",
      "Q-Learning",
      "Tkinter",
      "NumPy",
      "Matplotlib",
      "Pandas",
      "Markov Decision Process"
    ],

    year: "2022",
    org: "Orbit Future Academy",

    github:
      "https://github.com/Handepp/Q-Learning-Medical-Robot-Navigation-Simulation",

    overview:
      "Developed during the AI & Robotics curriculum at Orbit Future Academy (Kelas Ewako). The project simulates an autonomous disinfection/medical delivery robot navigating through a hospital room. The environment is modeled as a 7x7 grid world with 49 discrete states, containing multiple fixed obstacles (patients, medical beds, tables, and chairs), requiring the agent to learn the shortest collision-free path to its target via reinforcement learning.",

    howItWorks:
      "The system implements tabular Q-Learning with an epsilon-greedy action selection policy (alpha=0.1, gamma=0.9, epsilon=0.1). Over 800 training episodes, the agent explores 4 directional actions (Up, Down, Right, Left) and receives positive reward (+1) upon reaching the target and negative penalty (-1) when colliding with obstacles. The Q-table iteratively converges, yielding the optimal trajectory between start (0,0) and target coordinates.",

    contributions: [
      "Modeled custom 7x7 discrete hospital ward simulation environment using Python and Tkinter canvas",
      "Implemented tabular Q-Learning algorithm from scratch with epsilon-greedy exploration and Bellman updates",
      "Constructed state-action Q-table mapping 49 states across 4 discrete navigation vectors",
      "Visualized learned optimal path tracking, episode step reduction, and cumulative Q-value convergence curves"
    ],

    features: [
      "49-state discrete Markov Decision Process (MDP) grid simulation",
      "Multi-obstacle hospital room environment with customized asset sprites",
      "Soft epsilon-greedy exploration mechanism balancing path discovery and exploitation",
      "Live trajectory rendering demonstrating shortest path convergence"
    ],

    challenges: [
      "Balancing exploration and exploitation rates to avoid local minima around clusters of obstacles",
      "Ensuring rapid policy convergence within 800 training episodes without excessive oscillation"
    ],

    results: [
      "Agent successfully converged to the global shortest collision-free trajectory across 800 simulation episodes",
      "Demonstrated practical application of model-free reinforcement learning for healthcare robotics path planning"
    ],

    gallery: [
      "qlearning_navigation.jpg",
      "assets/img/projects/gallery/qlearning-navigation/qlearning_simulation_map.png",
      "assets/img/projects/gallery/qlearning-navigation/robot.png",
      "assets/img/projects/gallery/qlearning-navigation/disinfectant.png"
    ],

    video: "",
  },


  "canny-edge-detector": {
    id: "canny-edge-detector",
    tag: "Computer Vision & Edge Detection",
    categories: ["ai"],
    title: "Real-Time Object Detection & Contour Analysis using Canny Edge Detector",
    img: "canny_edge.jpg",

    summary:
      "A real-time computer vision system built with OpenCV that applies Canny edge detection, dynamic Gaussian filtering, and polygon contour approximation to identify and dimension obstacle boundaries via live camera feed.",

    tech: [
      "Python",
      "OpenCV",
      "Canny Edge Detection",
      "Computer Vision",
      "Gaussian Blur",
      "Contour Analysis",
      "NumPy"
    ],

    year: "2021",
    org: "Universitas Padjadjaran",

    github:
      "https://github.com/Handepp/Object-detection-using-canny-edge-detector",

    overview:
      "Developed during academic research at Universitas Padjadjaran (and published in the Internetworking Indonesia Journal). The project implements a live computer vision pipeline designed to assist autonomous mobile robots and 2D RPLiDAR sensors in recognizing physical obstacle boundaries. By processing camera frames in real time, the system extracts precise object edges and geometric properties that laser distance sensors alone may struggle to resolve.",

    howItWorks:
      "The live video stream is captured at 640x480, preprocessed with a 7x7 Gaussian blur to eliminate high-frequency noise, and converted to grayscale. Dual-threshold Canny edge detection is dynamically calibrated via interactive GUI trackbars (Threshold1, Threshold2, and Minimum Area). The resulting edge map undergoes morphological dilation, followed by contour extraction and polygon approximation (cv2.approxPolyDP) to compute vertices, area, and bounding boxes for real-time obstacle tracking.",

    contributions: [
      "Developed OpenCV real-time video capture and frame processing pipeline",
      "Implemented dual-threshold Canny edge detection with interactive trackbar calibration GUI",
      "Integrated morphological dilation and contour approximation for robust obstacle boundary extraction",
      "Calculated live geometric metrics including vertex points, surface area, and bounding boxes"
    ],

    features: [
      "Real-time 30 FPS webcam edge extraction and object bounding",
      "Interactive OpenCV trackbar interface for on-the-fly threshold and area tuning",
      "Noise resilience via parameterized Gaussian blurring and morphological operations",
      "Dynamic polygon approximation (approxPolyDP) classifying object geometry"
    ],

    challenges: [
      "Filtering out background lighting noise without losing critical object edges",
      "Maintaining low-latency processing (<33ms per frame) for real-time robotic navigation compatibility"
    ],

    results: [
      "Successfully implemented an effective real-time visual obstacle detection system",
      "Served as the foundational vision algorithm in published research assisting RPLiDAR sensor mapping"
    ],

    gallery: [
      "canny_edge.jpg",
      "assets/img/projects/gallery/canny-edge/canny_detection_demo.jpg"
    ],

    video: "",
  },


  "face-recognition": {
    id: "face-recognition",
    tag: "AI Computer Vision",
    categories: ["ai"],
    title: "Face Recognition Security Access System",
    img: "facerecog.webp",

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
      "facerecog.webp"
    ],

    video: "",
  },


  "handwashing-station": {
    id: "handwashing-station",
    tag: "Embedded System",
    categories: ["embedded"],
    title: "Automatic Contactless Handwashing Station",
    img: "keran.webp",

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
      "keran.webp",
      "assets/img/projects/gallery/handwashing-station/keran_2.webp",
      "assets/img/projects/gallery/handwashing-station/keran_3.webp"
    ],

    video: "",
  },


  "smart-glove": {
    id: "smart-glove",
    tag: "Assistive Embedded System",
    categories: ["embedded"],
    title: "Ultrasonic Smart Glove for Obstacle Detection",
    img: "sarung.webp",

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
      "sarung.webp"
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
  "house-price-prediction",
  "hdi-prediction",
  "emotion-detection",
  "densenet-animals",
  "qlearning-navigation",
  "canny-edge-detector",
  "face-recognition",
  "handwashing-station",
  "smart-glove",
];
