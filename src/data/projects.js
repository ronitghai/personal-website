import voyagerLogo from '../assets/voyager-logo.png'

export const projects = [
  {
    name: 'File Integrity Verification System',
    description:
      'Cloud-based system that detects tampered or altered files using SHA-256 hashing. Frontend on Azure Static Web Apps with a modern UI, backend on Azure Functions, and file/hash persistence in Azure Blob Storage. Includes secure hash comparison and JSON-based verification APIs tested with Postman and Swagger UI.',
    tech: [
      'Python',
      'FastAPI',
      'Azure Functions',
      'Azure Blob Storage',
      'HTML/CSS/JS',
      'Docker',
      'Postman',
      'Swagger UI',
    ],
    highlight: 'Cloud · Security',
  },
  {
    name: 'Voyager Pro — Smart Suitcase',
    icon: voyagerLogo,
    description:
      'GPS-enabled smart suitcase with weight tracking accurate to ±0.5 kg and BLE/WiFi-based iOS companion app. ESP32 firmware handles weight measurements, geofence alerts, and secure communication, while the SwiftUI iOS app displays real-time weight and location. Custom PCBs integrate load cells, HX711 amplifiers, and GPS modules.',
    tech: ['SwiftUI', 'ESP32', 'Arduino', 'KiCAD', 'C', 'C++', 'Google Maps API'],
    highlight: 'Embedded · iOS',
  },
  {
    name: 'A.L.T.R.O.N. — AI Personal Assistant',
    description:
      'Desktop assistant in Python that manages tasks, reminders, and notes through a conversational UI. Uses SpaCy for NLP, SQLite for persistence, gTTS for voice responses, and Google Generative AI (Gemini) for J.A.R.V.I.S-like conversations. Can also trigger Google searches and open results in the browser.',
    tech: ['Python', 'SpaCy', 'SQLite', 'gTTS', 'Tkinter', 'Google Gemini LLM'],
    highlight: 'Gen AI · Desktop',
  },
  {
    name: 'Fault Injection on AES-Encrypted ATMega328P',
    description:
      'Hardware and firmware pipeline to induce precise faults on AES-encrypted firmware running on an ATMega328P, first using FPGA hardware then ported to RP2040. Designed attacker and victim firmware in C/C++, built custom PCBs in KiCAD, synthesized hardware on a Zynq-7000 with Vivado, and used Python scripts to perform differential analysis and recover the AES key from limited traces.',
    tech: ['Python', 'C', 'C++', 'RP2040', 'FPGA', 'Zynq-7000', 'KiCAD', 'Vivado'],
    highlight: 'Hardware · Crypto',
  },
]
