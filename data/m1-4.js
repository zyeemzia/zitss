window.TRACK = window.TRACK || { modules: [], exam: [] };
TRACK.modules.push({
 "id": "m1",
 "order": 1,
 "code": "Build",
 "title": "Hardware and PC Repair",
 "subtitle": "Components, storage, power, peripherals and safe repair: the first stop on the Support Path",
 "outcomes": [
  "Describe the IT support role and organise your learning around the eight-stage ZITSS Support Path",
  "Identify and choose compatible CPUs, motherboards, memory, storage and power supplies",
  "Diagnose display, printer, mobile, power and overheating problems",
  "Build, upgrade and repair a PC safely and record the work"
 ],
 "lessons": [
  {
   "id": "m1-l1",
   "title": "The IT Support Role and How Computers Work",
   "subtitle": "What support specialists do, the Support Path, and the four jobs every computer performs",
   "minutes": 22,
   "objectives": [
    "Describe the IT support role, its tiers and the skills employers expect in 2026",
    "Explain the input, processing, storage and output model of a computer",
    "Convert between bits, bytes and the decimal and binary storage units",
    "Use the eight stages of the ZITSS Support Path to organise your learning"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "When a laptop will not boot, a printer jams before a board meeting or a new employee cannot sign in, someone has to fix it quickly and calmly. That person is the **IT support specialist**. In 2026 the job is broader than ever: you look after physical devices, three major operating systems, networks, cloud services and accounts, and you are often the first person to spot a security problem. Above all, you keep other people productive."
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "1",
       "title": "Build",
       "text": "Know the hardware: components, assembly, upgrades, safe repair."
      },
      {
       "label": "2",
       "title": "Boot",
       "text": "Install, configure and support Windows, Linux and macOS."
      },
      {
       "label": "3",
       "title": "Connect",
       "text": "Get devices onto networks with TCP/IP, DNS, DHCP and Wi-Fi."
      },
      {
       "label": "4",
       "title": "Resolve",
       "text": "Troubleshoot methodically, serve users well and manage tickets."
      },
      {
       "label": "5",
       "title": "Manage",
       "text": "Administer users, groups, policies, backups and patches."
      },
      {
       "label": "6",
       "title": "Host",
       "text": "Run infrastructure services, virtual machines, cloud and SaaS."
      },
      {
       "label": "7",
       "title": "Protect",
       "text": "Apply security basics: identity, MFA, malware, phishing, encryption."
      },
      {
       "label": "8",
       "title": "Automate",
       "text": "Script repetitive work, document everything and grow your career."
      }
     ],
     "title": "The ZITSS Support Path: eight stages"
    },
    {
     "type": "table",
     "head": [
      "Tier",
      "Main work",
      "Example",
      "Escalates to"
     ],
     "rows": [
      [
       "Tier 0 (self-service)",
       "Knowledge base, portal, self-service password reset, virtual agent (chatbot)",
       "User resets own password with MFA through a portal",
       "Tier 1 if it fails"
      ],
      [
       "Tier 1 (service desk)",
       "Logging tickets, first diagnosis, known fixes",
       "Mapping a shared drive, clearing a print queue",
       "Tier 2"
      ],
      [
       "Tier 2 (desktop / technical)",
       "Deeper troubleshooting, hardware swaps, remote fixes",
       "Reimaging a laptop, fixing a VPN profile",
       "Tier 3"
      ],
      [
       "Tier 3 (specialist / engineering)",
       "Servers, network design, vendor escalation",
       "Fixing a failed domain controller",
       "Vendor or supplier"
      ]
     ],
     "title": "Typical support tiers"
    },
    {
     "type": "topology",
     "title": "Help-desk tooling in a typical organisation",
     "nodes": [
      {
       "id": "kb",
       "kind": "doc",
       "label": "Knowledge base",
       "sub": "articles for users and staff",
       "x": 1,
       "y": 0
      },
      {
       "id": "cmdb",
       "kind": "db",
       "label": "Asset register",
       "sub": "devices, owners, warranty",
       "x": 3,
       "y": 0
      },
      {
       "id": "mon",
       "kind": "monitor",
       "label": "Monitoring",
       "sub": "alerts from devices",
       "x": 5,
       "y": 0
      },
      {
       "id": "portal",
       "kind": "process",
       "label": "Self-service",
       "sub": "portal, chat, virtual agent",
       "x": 1,
       "y": 2
      },
      {
       "id": "itsm",
       "kind": "process",
       "label": "Ticketing system",
       "sub": "one queue, SLAs, history",
       "x": 3,
       "y": 2
      },
      {
       "id": "rs",
       "kind": "process",
       "label": "Remote support",
       "sub": "consent and logging",
       "x": 5,
       "y": 2
      },
      {
       "id": "users",
       "kind": "team",
       "label": "Users",
       "sub": "phone, email, walk-up",
       "x": 1,
       "y": 4
      },
      {
       "id": "tech",
       "kind": "user",
       "label": "Technicians",
       "sub": "Tier 1 to Tier 3",
       "x": 4,
       "y": 4
      }
     ],
     "links": [
      {
       "a": "users",
       "b": "portal",
       "label": "self-help"
      },
      {
       "a": "users",
       "b": "itsm",
       "label": "call / email"
      },
      {
       "a": "portal",
       "b": "itsm",
       "label": "creates ticket"
      },
      {
       "a": "kb",
       "b": "portal",
       "label": "articles"
      },
      {
       "a": "cmdb",
       "b": "itsm",
       "label": "linked assets"
      },
      {
       "a": "mon",
       "b": "itsm",
       "label": "auto-tickets",
       "style": "dashed"
      },
      {
       "a": "tech",
       "b": "itsm",
       "label": "work queue"
      },
      {
       "a": "tech",
       "b": "rs"
      }
     ],
     "caption": "Every channel ends in one ticketing system, which links to knowledge, asset records and monitoring. Notice that self-service and monitoring alerts can create tickets without anyone picking up a phone."
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Hiring managers consistently rank **communication, patience and reliability** alongside technical knowledge. A specialist who explains clearly, sets expectations and follows up will be trusted with harder problems faster than a brilliant technician who disappears.",
     "title": "Technical skill is only half the job"
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Input",
       "text": "Keyboard, mouse, touch, camera, microphone, network data arriving."
      },
      {
       "label": "Processing",
       "text": "The CPU (and sometimes GPU or NPU) executes instructions on the data."
      },
      {
       "label": "Storage",
       "text": "RAM holds working data; SSDs and HDDs keep data when power is off."
      },
      {
       "label": "Output",
       "text": "Display, speakers, printer, or data sent over the network."
      }
     ],
     "title": "The four jobs every computer performs"
    },
    {
     "type": "table",
     "head": [
      "Unit",
      "Decimal (drive makers)",
      "Binary (operating systems)",
      "Typical use"
     ],
     "rows": [
      [
       "Bit (b)",
       "0 or 1",
       "0 or 1",
       "Network speeds: Mbps, Gbps"
      ],
      [
       "Byte (B)",
       "8 bits",
       "8 bits",
       "One character of text"
      ],
      [
       "Kilobyte",
       "1,000 bytes (kB)",
       "1,024 bytes (KiB)",
       "Small text files"
      ],
      [
       "Megabyte",
       "1,000,000 bytes (MB)",
       "1,048,576 bytes (MiB)",
       "Photos, documents"
      ],
      [
       "Gigabyte",
       "10^9 bytes (GB)",
       "2^30 bytes (GiB)",
       "RAM, apps, videos"
      ],
      [
       "Terabyte",
       "10^12 bytes (TB)",
       "2^40 bytes (TiB)",
       "Drives and backups"
      ]
     ],
     "title": "Storage units you will use daily"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Download time",
       "expr": "time (s) = file size (bits) / link speed (bits per second)",
       "meaning": "A 2 GB file is about 16,000 megabits. On a 100 Mbps link it takes roughly 160 seconds, plus overhead."
      },
      {
       "name": "Reported drive size",
       "expr": "size in GiB = size in bytes / 1,073,741,824",
       "meaning": "A '1 TB' drive holds 10^12 bytes, which the OS reports as about 931 GiB. Nothing is missing."
      }
     ],
     "title": "Two conversions that answer common tickets"
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A user in a Dhaka buying house complains that a new 512 GB laptop shows only 476 GB. The difference is units (512 x 10^9 bytes is about 476.8 GiB), plus a recovery partition. A two-sentence explanation closes the ticket and builds trust.",
     "title": "The case of the 'missing' storage"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Hard skills",
       "items": [
        "Hardware diagnosis and replacement",
        "Windows, Linux and macOS administration",
        "Networking basics: IP, DNS, DHCP, Wi-Fi",
        "Ticketing systems and remote support tools",
        "Security hygiene and basic scripting"
       ]
      },
      {
       "title": "Soft skills",
       "items": [
        "Listening and asking good questions",
        "Explaining without jargon",
        "Staying calm with stressed users",
        "Writing clear notes and articles",
        "Owning a problem until it is closed"
       ]
      }
     ],
     "title": "Hard skills and soft skills employers test"
    },
    {
     "type": "scenario",
     "situation": "On your first day, three things arrive at once: the CEO's assistant cannot print the board pack due in 20 minutes, a user asks how to change their desktop wallpaper, and an automated alert says one backup job failed overnight.",
     "options": [
      {
       "text": "Change the wallpaper first because it is the quickest win",
       "feedback": "Quick wins matter, but this one has no business impact and can wait or be handled by a knowledge-base article.",
       "best": false
      },
      {
       "text": "Ignore the backup alert because nobody has complained about it",
       "feedback": "A failed backup is silent risk. It needs to be logged and looked at today, even if it is not first.",
       "best": false
      },
      {
       "text": "Log all three, start on the board-pack printing, and note the backup alert for follow-up within the hour",
       "feedback": "Correct. You capture everything, work on the item with the most urgent business impact and make sure the silent risk is not forgotten.",
       "best": true
      },
      {
       "text": "Escalate everything to Tier 2 because you are new",
       "feedback": "Escalating work you can handle slows the team down. New staff should still triage and act within their skills.",
       "best": false
      }
     ],
     "title": "Your first morning on the service desk"
    },
    {
     "type": "reflection",
     "prompt": "Think about the last time someone fixed a technology problem for you. What did they do, apart from the technical fix, that made the experience good or bad?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "IT support specialist",
       "def": "A professional who installs, maintains and troubleshoots devices, software, networks and accounts so that people can work without interruption."
      },
      {
       "term": "Service desk",
       "def": "The single point of contact between users and IT, where requests and incidents are received, logged and managed."
      },
      {
       "term": "Tier (support level)",
       "def": "A layer of support with increasing skill and access; work moves up tiers through escalation."
      },
      {
       "term": "Escalation",
       "def": "Passing a ticket to a more specialised person or team when it exceeds your skill, access or authority."
      },
      {
       "term": "Bit",
       "def": "The smallest unit of digital data, holding a value of 0 or 1; network speeds are measured in bits per second."
      },
      {
       "term": "Byte",
       "def": "A group of eight bits; storage and file sizes are measured in bytes."
      },
      {
       "term": "Gibibyte (GiB)",
       "def": "2^30 bytes (1,073,741,824 bytes); operating systems often show this value while labelling it GB."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Support exists to keep people productive; technical skill and communication count equally.",
      "Work flows from self-service up through tiers, and escalation passes evidence, not just the problem.",
      "One ticketing system ties channels, knowledge, assets and monitoring together.",
      "Drive makers count in decimal (GB), operating systems in binary (GiB): 1 TB shows as about 931 GiB.",
      "Network speeds are in bits, file sizes in bytes: multiply bytes by 8 before dividing by link speed."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A user's new '1 TB' drive shows as 931 GB in the operating system. What is the most likely explanation?",
       "options": [
        "The OS reports binary units while the drive maker uses decimal units",
        "The drive is faulty and must be replaced",
        "Malware has hidden part of the drive",
        "The drive was formatted with an old file system that wastes a lot of space"
       ],
       "answer": 0,
       "explain": "Drive makers count 10^12 bytes, while the OS divides by 2^30 per GiB, giving about 931. Nothing is faulty, hidden or misformatted."
      },
      {
       "q": "Which tier usually handles password resets that a self-service portal could not complete?",
       "options": [
        "Tier 3",
        "Tier 0",
        "The hardware vendor",
        "Tier 1"
       ],
       "answer": 3,
       "explain": "Tier 1 service desk staff handle known, routine fixes such as resets when self-service fails. Tier 3 and vendors deal with complex engineering problems."
      },
      {
       "q": "In the input-processing-storage-output model, where does RAM belong?",
       "options": [
        "Input",
        "Output",
        "Processing only",
        "Storage (working memory)"
       ],
       "answer": 3,
       "explain": "RAM stores the data and programs the CPU is working on right now, so it belongs to storage, although it is volatile. It does not take input or produce output itself."
      },
      {
       "q": "Roughly how long does a 1 GB file take to download over a 100 Mbps link, ignoring overhead?",
       "options": [
        "About 80 seconds",
        "About 8 seconds",
        "About 10 seconds",
        "About 800 seconds"
       ],
       "answer": 0,
       "explain": "1 GB is 8,000 megabits; 8,000 / 100 = 80 seconds. Forgetting to multiply bytes by 8 gives the wrong answer of 10 seconds."
      },
      {
       "q": "Which behaviour best shows the soft skills employers look for in support staff?",
       "options": [
        "Explaining the fix in plain language and confirming the user is working again",
        "Using precise technical terms so users learn them",
        "Closing tickets quickly without contacting the user",
        "Escalating every ticket that involves an unhappy or demanding user straight away"
       ],
       "answer": 0,
       "explain": "Plain explanations and confirming the result show communication and ownership. Jargon confuses users, silent closure skips confirmation and escalating unhappy users avoids responsibility."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l2",
   "title": "CPU, Motherboard and Memory",
   "subtitle": "The core trio that decides how fast and how stable a computer is",
   "minutes": 26,
   "objectives": [
    "Identify motherboard form factors, sockets, slots and connectors",
    "Compare CPU characteristics: cores, threads, clock speed, cache and integrated graphics",
    "Choose compatible RAM by type, speed, capacity and channel configuration",
    "Read hardware details from the command line on Windows, Linux and macOS"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The **motherboard** is the backbone that every other part plugs into. The **CPU** does the general-purpose thinking, and **RAM** is the fast, temporary workspace it uses. Most performance and stability problems you will meet on desktops and laptops trace back to one of these three: a CPU running too hot, a mismatched memory module or a failing board component."
    },
    {
     "type": "layers",
     "items": [
      {
       "label": "CPU and cooler",
       "parts": [
        "Socket with locking mechanism",
        "Heatsink and fan or liquid cooler",
        "Thermal paste between them"
       ]
      },
      {
       "label": "Memory",
       "parts": [
        "DIMM slots (desktops) or SO-DIMM / soldered RAM (laptops)",
        "Dual-channel pairs, often colour-coded"
       ]
      },
      {
       "label": "Expansion",
       "parts": [
        "PCIe x16 slot for graphics",
        "PCIe x1 / x4 slots for network or capture cards",
        "M.2 slots for NVMe SSDs"
       ]
      },
      {
       "label": "Chipset and firmware",
       "parts": [
        "Chipset links CPU to slower devices",
        "UEFI firmware chip and CMOS battery (CR2032)"
       ]
      },
      {
       "label": "Connectors",
       "parts": [
        "24-pin ATX and 8-pin CPU power",
        "SATA ports, front-panel headers, USB headers, fan headers",
        "Rear I/O: USB, video, audio, Ethernet"
       ]
      }
     ],
     "title": "What sits on a typical desktop motherboard (top to bottom)"
    },
    {
     "type": "table",
     "head": [
      "Form factor",
      "Approx. size",
      "Typical use",
      "Support note"
     ],
     "rows": [
      [
       "ATX",
       "305 x 244 mm",
       "Standard desktops and workstations",
       "Most slots; easiest to work on"
      ],
      [
       "Micro-ATX",
       "244 x 244 mm",
       "Office desktops",
       "Fewer expansion slots"
      ],
      [
       "Mini-ITX",
       "170 x 170 mm",
       "Small form factor PCs, kiosks",
       "One PCIe slot; tight cooling"
      ],
      [
       "Laptop / proprietary",
       "Varies",
       "Notebooks and all-in-ones",
       "Parts often soldered; use service manuals"
      ]
     ],
     "title": "Common form factors"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Cores and threads",
       "items": [
        "More cores help multitasking and heavy apps",
        "Threads let one core run two instruction streams",
        "Office PCs: 4-8 cores is ample in 2026"
       ]
      },
      {
       "title": "Clock and cache",
       "items": [
        "Clock speed (GHz) sets cycles per second",
        "Boost clocks rise briefly when cool",
        "Larger cache reduces trips to RAM"
       ]
      },
      {
       "title": "Extras",
       "items": [
        "Integrated graphics avoid a separate GPU",
        "NPU accelerates on-device AI features",
        "Virtualisation extensions must be enabled in firmware for VMs"
       ]
      }
     ],
     "title": "CPU characteristics that matter to users"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A CPU only fits a motherboard with the matching **socket and chipset support**, and sometimes needs a firmware update first. Always check the board maker's CPU support list before ordering a replacement or upgrade.",
     "title": "Socket compatibility is not optional"
    },
    {
     "type": "table",
     "head": [
      "Type",
      "Where",
      "Notes"
     ],
     "rows": [
      [
       "DDR4 DIMM",
       "Desktops from roughly 2015-2022",
       "288 pins, 1.2 V; not interchangeable with DDR5"
      ],
      [
       "DDR5 DIMM",
       "Current desktops",
       "288 pins but notch in a different place; on-module power management"
      ],
      [
       "SO-DIMM",
       "Laptops, mini PCs",
       "Shorter module; DDR4 and DDR5 versions differ"
      ],
      [
       "LPDDR (soldered)",
       "Thin laptops, tablets, phones",
       "Cannot be upgraded; buy enough at purchase"
      ],
      [
       "LPCAMM2 / CAMM2",
       "Some newer thin laptops and workstations",
       "Compact, replaceable module for low-power memory; check the service manual"
      ],
      [
       "ECC memory",
       "Servers, workstations",
       "Detects and corrects single-bit errors; needs board support"
      ]
     ],
     "title": "Memory generations at a glance"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Peak bandwidth per channel",
       "expr": "bandwidth (MB/s) = transfers per second (MT/s) x 8 bytes",
       "meaning": "DDR5-5600 gives about 5,600 x 8 = 44,800 MB/s (about 44.8 GB/s) per 64-bit channel."
      },
      {
       "name": "Dual-channel bandwidth",
       "expr": "total = per-channel bandwidth x number of populated channels",
       "meaning": "Two matched modules in the correct slots roughly double peak bandwidth compared with one module."
      }
     ],
     "title": "Memory maths"
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "Peak bandwidth of one memory channel",
     "labels": [
      "DDR4-2400",
      "DDR4-3200",
      "DDR5-4800",
      "DDR5-5600",
      "DDR5-6400"
     ],
     "series": [
      {
       "name": "Peak per channel",
       "values": [
        19.2,
        25.6,
        38.4,
        44.8,
        51.2
       ]
      }
     ],
     "unit": " GB/s",
     "yLabel": "GB/s per 64-bit channel",
     "caption": "Each bar is MT/s x 8 bytes, so the numbers are exact theoretical peaks; real throughput is lower. Notice that filling a second channel doubles these figures, which is why matched pairs matter."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Confirm the specification",
       "text": "Check type (DDR4 or DDR5), maximum capacity, supported speeds and slot count in the board manual or with a system information tool."
      },
      {
       "title": "Prepare",
       "text": "Shut down, switch off the power supply, unplug and hold the power button for a few seconds to drain residual charge. Wear an ESD strap."
      },
      {
       "title": "Install in the right slots",
       "text": "Use the slots the manual recommends for dual channel (often A2 and B2). Align the notch and press firmly until the latches click."
      },
      {
       "title": "Verify",
       "text": "Boot, enter firmware setup or the OS, confirm the full capacity and speed are detected, then run a memory test if the system was unstable."
      }
     ],
     "title": "Adding RAM to a desktop safely"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "Get-CimInstance Win32_Processor | Select-Object Name, NumberOfCores, NumberOfLogicalProcessors, MaxClockSpeed",
      "Get-CimInstance Win32_PhysicalMemory | Select-Object BankLabel, Capacity, Speed, Manufacturer",
      "Get-CimInstance Win32_BaseBoard | Select-Object Manufacturer, Product, SerialNumber",
      "# Capacity is in bytes: divide by 1GB to read it in GiB",
      "(Get-CimInstance Win32_ComputerSystem).TotalPhysicalMemory / 1GB"
     ],
     "title": "Reading CPU and memory details",
     "note": "These read-only queries are safe to run on any user's machine and are ideal for asset records and upgrade planning."
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "lscpu | grep -E 'Model name|^CPU\\(s\\)|Thread|MHz'",
      "free -h",
      "sudo dmidecode --type memory | grep -E 'Size|Speed|Type:'",
      "# macOS equivalent in Terminal:",
      "# system_profiler SPHardwareDataType SPMemoryDataType"
     ],
     "title": "The same information on Linux and macOS"
    },
    {
     "type": "scenario",
     "situation": "An accountant in a Chattogram shipping office has a desktop with one 8 GB DDR4 module and two free slots. Spreadsheets with large pivot tables are slow and the system uses 95% of memory. The manager approves a small budget.",
     "options": [
      {
       "text": "Buy one 16 GB DDR5 module because it is newer and faster",
       "feedback": "DDR5 will not fit or work in a DDR4 board; the notch and electrical design differ.",
       "best": false
      },
      {
       "text": "Add a matching 8 GB DDR4 module in the paired slot to reach 16 GB in dual channel",
       "feedback": "Correct. It fixes the memory pressure, enables dual-channel bandwidth and fits the budget.",
       "best": true
      },
      {
       "text": "Replace the CPU with a faster model",
       "feedback": "The bottleneck is memory pressure, not CPU. A new CPU may also need a different socket.",
       "best": false
      },
      {
       "text": "Increase the page file size and close the ticket",
       "feedback": "A larger page file uses the much slower disk and only hides the shortage.",
       "best": false
      }
     ],
     "title": "Upgrade request from accounts"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Motherboard",
       "def": "The main circuit board that connects the CPU, memory, storage, expansion cards and power, and holds the firmware."
      },
      {
       "term": "CPU socket",
       "def": "The mounting interface on a motherboard that accepts a specific family of processors."
      },
      {
       "term": "Chipset",
       "def": "Motherboard logic that connects the CPU to slower peripherals and determines features such as USB, SATA and PCIe lanes."
      },
      {
       "term": "Core",
       "def": "An independent processing unit inside a CPU that can execute its own instruction stream."
      },
      {
       "term": "Cache",
       "def": "Very fast memory built into the CPU that holds recently used data to avoid slower trips to RAM."
      },
      {
       "term": "Dual channel",
       "def": "A memory configuration where matched modules in paired slots are accessed in parallel to increase bandwidth."
      },
      {
       "term": "ECC memory",
       "def": "Error-correcting code RAM that detects and fixes single-bit errors, used in servers and workstations."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Socket, chipset support and firmware version decide whether a CPU fits a board.",
      "DDR4 and DDR5 are keyed differently and never interchangeable; check the manual before buying.",
      "Matched modules in the recommended slots enable dual channel and double peak bandwidth.",
      "Soldered LPDDR cannot be upgraded, so size laptop memory correctly at purchase.",
      "Read-only inventory commands give exact CPU and memory details for records and upgrades."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A technician tries to install a DDR5 module in a DDR4 slot. What happens?",
       "options": [
        "It works at DDR4 speed",
        "It works, but only in single-channel mode at reduced DDR4 speeds and timings",
        "It works after a firmware update",
        "It will not physically seat because the key notch is in a different position"
       ],
       "answer": 3,
       "explain": "DDR4 and DDR5 modules have the notch in different places, so they cannot be inserted into the wrong slot. There is no backwards compatibility mode or firmware fix."
      },
      {
       "q": "Which component is most likely to need a firmware update before a newer CPU will work in an existing board?",
       "options": [
        "The RAM modules",
        "The power supply",
        "The motherboard UEFI",
        "The SSD"
       ],
       "answer": 2,
       "explain": "Boards often need updated UEFI firmware to recognise newer CPUs on the same socket. RAM, PSU and SSD firmware do not control CPU support."
      },
      {
       "q": "What is the approximate peak bandwidth of one DDR4-3200 channel?",
       "options": [
        "3.2 GB/s",
        "12.8 GB/s",
        "51.2 GB/s",
        "25.6 GB/s"
       ],
       "answer": 3,
       "explain": "3,200 MT/s x 8 bytes = 25,600 MB/s, about 25.6 GB/s. 51.2 GB/s would be two channels."
      },
      {
       "q": "Why should two RAM modules be placed in the slots the manual recommends?",
       "options": [
        "To reduce power consumption",
        "To enable dual-channel operation",
        "To make the CMOS battery last longer",
        "To allow ECC to work on any board"
       ],
       "answer": 1,
       "explain": "Recommended slot pairs enable dual channel and better bandwidth. Slot choice does not affect battery life, power much, or ECC support."
      },
      {
       "q": "A thin laptop is too slow with 8 GB of RAM. The service manual says memory is LPDDR5. What should you advise?",
       "options": [
        "Memory cannot be upgraded; consider a replacement device with more RAM",
        "Add a SO-DIMM module",
        "Replace the RAM chips with larger ones",
        "Increase the virtual memory size and enable dual-channel mode in the firmware"
       ],
       "answer": 0,
       "explain": "LPDDR is soldered to the board, so it cannot be upgraded in practice. The right advice is to buy enough memory at purchase or replace the device."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l3",
   "title": "Storage, Power and Cooling",
   "subtitle": "Keeping data safe, power clean and components cool",
   "minutes": 26,
   "objectives": [
    "Compare HDD, SATA SSD and NVMe SSD performance, interfaces and failure signs",
    "Size a power supply and recognise power-related faults",
    "Explain how cooling works and diagnose overheating",
    "Check drive health and file system status with built-in tools"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Storage holds everything the user cares about, power keeps everything alive and cooling keeps everything stable. Problems in these three areas often look like software faults: random restarts, freezes, slow boot or corrupted files. A good support specialist checks the physical basics before blaming the operating system."
    },
    {
     "type": "table",
     "head": [
      "Type",
      "Interface",
      "Typical sequential speed",
      "Strengths",
      "Watch for"
     ],
     "rows": [
      [
       "HDD (spinning disk)",
       "SATA",
       "150-250 MB/s",
       "Cheap per terabyte, good for archives",
       "Clicking, slow response, reallocated sectors"
      ],
      [
       "SATA SSD",
       "SATA",
       "Up to about 550 MB/s",
       "Big upgrade over HDD, fits older PCs",
       "Wear on cheap drives, sudden failure"
      ],
      [
       "NVMe SSD (M.2)",
       "PCIe",
       "About 3,000-14,000 MB/s (PCIe 3.0 to 5.0)",
       "Fastest boot and app load",
       "Heat throttling; check M.2 key and PCIe support"
      ],
      [
       "External / USB",
       "USB 3.x / USB4",
       "Varies by drive and port",
       "Portable backups and transfers",
       "Unplugged without ejecting; loss and theft"
      ]
     ],
     "title": "Storage technologies compared"
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "Typical sequential read speed by drive type",
     "labels": [
      "HDD",
      "SATA SSD",
      "NVMe PCIe 3.0",
      "NVMe PCIe 4.0",
      "NVMe PCIe 5.0"
     ],
     "series": [
      {
       "name": "Typical read",
       "values": [
        200,
        550,
        3500,
        7000,
        12000
       ]
      }
     ],
     "unit": " MB/s",
     "yLabel": "MB/s",
     "caption": "Illustrative figures for good drives of each type; real results depend on the model, slot and workload. For users the biggest felt jump is from any HDD to any SSD, because access time drops from milliseconds to microseconds."
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "M.2 is a **shape**, not a speed. An M.2 slot may support SATA, NVMe or both, and sizes such as 2242, 2260 and 2280 describe width and length in millimetres. Read the board or laptop manual before ordering.",
     "title": "Check the M.2 slot before you buy"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "Get-PhysicalDisk | Select-Object FriendlyName, MediaType, HealthStatus, Size",
      "Get-Volume | Select-Object DriveLetter, FileSystem, SizeRemaining, Size",
      "# Scan a volume for file system errors without taking it offline",
      "Repair-Volume -DriveLetter C -Scan",
      "# Classic equivalent (read-only check):",
      "chkdsk C:"
     ],
     "title": "Checking disk health and file systems",
     "note": "Run read-only scans first. Repairs that lock a volume should be scheduled with the user, after a backup."
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "lsblk -o NAME,SIZE,TYPE,MOUNTPOINT,MODEL",
      "df -h",
      "sudo smartctl -H /dev/sda",
      "sudo smartctl -a /dev/nvme0 | grep -iE 'percentage used|media errors|temperature'"
     ],
     "title": "Disk health on Linux"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Estimated load",
       "expr": "load (W) = CPU TDP + GPU board power + about 50-100 W for board, drives and fans",
       "meaning": "A 65 W CPU with integrated graphics in an office PC usually draws well under 200 W."
      },
      {
       "name": "Recommended PSU rating",
       "expr": "PSU rating = estimated peak load x 1.3 to 1.5",
       "meaning": "Headroom keeps the PSU in its efficient range and handles brief power spikes from modern GPUs."
      },
      {
       "name": "UPS runtime (rough)",
       "expr": "runtime (h) = battery Wh x inverter efficiency / load (W)",
       "meaning": "A 600 Wh UPS at 90% efficiency running a 270 W load lasts about 2 hours in theory; real runtimes are lower as batteries age."
      }
     ],
     "title": "Power supply sizing"
    },
    {
     "type": "table",
     "head": [
      "Symptom",
      "Possible cause",
      "First check"
     ],
     "rows": [
      [
       "No lights, no fans",
       "Dead outlet, switched-off PSU, failed PSU",
       "Outlet, PSU switch, known-good cable"
      ],
      [
       "Fans spin, no display",
       "RAM, CPU power cable, GPU power",
       "8-pin CPU cable, reseat RAM, POST codes"
      ],
      [
       "Random restarts under load",
       "Undersized or ageing PSU, overheating",
       "Event logs, temperatures, PSU rating"
      ],
      [
       "Restarts during storms or load-shedding",
       "Unstable mains power",
       "UPS or AVR; surge protection"
      ]
     ],
     "title": "Power problems and symptoms"
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A small clinic in Sylhet saw repeated database corruption on its reception PC. The cause was power cuts during writes. A line-interactive UPS with a USB link that triggers a clean shutdown solved the problem, and the clinic stopped losing appointment records.",
     "title": "Load-shedding and corrupted files"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Air cooling",
       "items": [
        "Heatsink plus fan; simple and reliable",
        "Needs dust cleaning every 6-12 months",
        "Most office PCs and laptops"
       ]
      },
      {
       "title": "Liquid cooling (AIO)",
       "items": [
        "Pump and radiator move heat away",
        "Quieter under heavy load",
        "Pump failure can overheat quickly"
       ]
      },
      {
       "title": "Case airflow",
       "items": [
        "Front intake, rear and top exhaust",
        "Cable management keeps air paths clear",
        "Positive pressure reduces dust entry"
       ]
      }
     ],
     "title": "Cooling options"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Confirm the symptom",
       "text": "Ask when it happens: under load, after a period of use or at random. Check fan noise and the heat of the chassis."
      },
      {
       "title": "Measure",
       "text": "Read CPU and GPU temperatures with firmware setup or a monitoring utility. Many CPUs throttle around 95-100 degrees C."
      },
      {
       "title": "Clean and inspect",
       "text": "Power off, then blow dust out with compressed air while holding fans still. Check that every fan spins."
      },
      {
       "title": "Refresh thermal paste",
       "text": "On older systems, clean the old paste with isopropyl alcohol and apply a small new amount before refitting the cooler."
      },
      {
       "title": "Retest",
       "text": "Run a sustained load and confirm temperatures and stability are now normal."
      }
     ],
     "title": "Diagnosing overheating"
    },
    {
     "type": "scenario",
     "situation": "A field officer's laptop shuts down without warning after about 20 minutes of video calls. It is two years old, very hot near the left vent and the fan is loud. Event logs show 'unexpected shutdown' with no blue screen.",
     "options": [
      {
       "text": "Clean the vents and fan, check temperatures and, if needed, replace the thermal paste",
       "feedback": "Correct. Heat-related shutdowns under load with a loud fan and a hot vent are classic symptoms of blocked cooling.",
       "best": true
      },
      {
       "text": "Reinstall the operating system",
       "feedback": "The pattern points to heat, not software. Reinstalling wastes hours and will not change it.",
       "best": false
      },
      {
       "text": "Replace the battery",
       "feedback": "A battery fault usually shows as sudden shutdown at a specific charge level or on battery only, not after sustained load.",
       "best": false
      },
      {
       "text": "Lower the screen brightness",
       "feedback": "This slightly reduces power use but does nothing about the cooling failure.",
       "best": false
      }
     ],
     "title": "Laptop that switches off on its own"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "HDD",
       "def": "Hard disk drive: magnetic storage with spinning platters and moving heads; cheap per terabyte but slower and shock-sensitive."
      },
      {
       "term": "SSD",
       "def": "Solid-state drive: flash storage with no moving parts, much faster and more durable than an HDD."
      },
      {
       "term": "NVMe",
       "def": "A storage protocol that runs SSDs over PCIe lanes for very high speed and low latency."
      },
      {
       "term": "S.M.A.R.T.",
       "def": "Self-monitoring data reported by drives, such as reallocated sectors, wear and temperature, used to predict failure."
      },
      {
       "term": "PSU",
       "def": "Power supply unit: converts mains AC into the DC voltages a computer needs."
      },
      {
       "term": "UPS",
       "def": "Uninterruptible power supply: a battery unit that keeps equipment running briefly during outages and can trigger safe shutdown."
      },
      {
       "term": "Thermal throttling",
       "def": "Automatic reduction of processor speed to protect it when it gets too hot."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Physical faults in storage, power or cooling often look like software problems; check them first.",
      "M.2 is a shape: confirm SATA or NVMe support and the module length before ordering.",
      "Size a PSU at about 1.3-1.5 times the estimated peak load, and use a UPS where mains power is unstable.",
      "Overheating follows a pattern: measure, clean, refresh paste, then retest under load.",
      "Make sure a current backup exists before repairing any volume."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A user's PC has an M.2 SATA SSD. They buy a faster NVMe drive but it is not detected. What is the most likely cause?",
       "options": [
        "The drive is too large",
        "The PSU is too weak",
        "The M.2 slot only supports SATA",
        "The drive needs to be formatted first"
       ],
       "answer": 2,
       "explain": "Some M.2 slots support only SATA. An NVMe drive in a SATA-only slot is not detected. Size, PSU capacity and formatting do not stop detection by firmware."
      },
      {
       "q": "An office PC uses a 65 W CPU, integrated graphics and one SSD. Which PSU rating is sensible?",
       "options": [
        "300-400 W",
        "150 W",
        "1,200 W",
        "Exactly 65 W"
       ],
       "answer": 0,
       "explain": "Total load is roughly 65 W + 75 W, so a quality 300-400 W unit gives ample headroom and efficiency. 150 W is tight; 1,200 W is wasteful; 65 W ignores other parts."
      },
      {
       "q": "Which symptom most strongly suggests a failing hard disk drive?",
       "options": [
        "Clicking noises and growing reallocated sector counts",
        "The screen flickers",
        "Wi-Fi drops every few minutes and reconnects on its own without warning",
        "Keyboard keys repeat"
       ],
       "answer": 0,
       "explain": "Clicking and reallocated sectors indicate mechanical and surface failure. The other symptoms point to display, network and input faults."
      },
      {
       "q": "What should you do FIRST before repairing errors on a user's data volume?",
       "options": [
        "Run the repair immediately so the errors do not spread",
        "Reformat the drive",
        "Update the BIOS",
        "Make sure a current backup exists"
       ],
       "answer": 3,
       "explain": "Repairs can make things worse on a failing disk, so protect the data first. Formatting destroys data and firmware is unrelated."
      },
      {
       "q": "A desktop restarts during frequent power cuts and files become corrupted. What is the best fix?",
       "options": [
        "A bigger power supply unit with higher wattage headroom",
        "A UPS configured to trigger a clean shutdown",
        "More RAM",
        "A faster SSD"
       ],
       "answer": 1,
       "explain": "A UPS bridges short outages and shuts the system down cleanly during long ones. A bigger PSU, more RAM or a faster SSD do nothing when mains power disappears."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l4",
   "title": "Peripherals, Displays, Printers and Mobile Devices",
   "subtitle": "Everything users plug in, print with or carry around",
   "minutes": 24,
   "objectives": [
    "Identify common ports, cables and connectors and what they carry",
    "Troubleshoot display, audio and input problems",
    "Explain printer types, drivers and print queues and fix common faults",
    "Support laptops, phones and tablets including mobile device basics"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Peripherals generate a surprising share of tickets: a projector that will not show the slides, a headset with no microphone, a label printer printing blank pages. These problems are rarely difficult, but they are visible and urgent because they usually happen in meetings, at counters or in front of customers."
    },
    {
     "type": "table",
     "head": [
      "Connector",
      "Carries",
      "Notes"
     ],
     "rows": [
      [
       "USB-C",
       "Data, video, power (depends on port)",
       "Same shape, different abilities: look for USB4, Thunderbolt or DisplayPort marks and the charging wattage"
      ],
      [
       "USB-A",
       "Data and limited power",
       "Still common for keyboards, mice, drives"
      ],
      [
       "HDMI",
       "Digital video and audio",
       "TVs, projectors, monitors"
      ],
      [
       "DisplayPort",
       "Digital video and audio",
       "Monitors; supports daisy-chaining on some screens"
      ],
      [
       "RJ45",
       "Ethernet",
       "Wired network; may also carry PoE power"
      ],
      [
       "3.5 mm jack",
       "Analogue audio",
       "Headsets; combined mic and audio on many laptops"
      ]
     ],
     "title": "Ports and connectors you must recognise"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A USB-C port might offer only USB 2.0 data and slow charging, or USB4 or Thunderbolt with 40-80 Gbps, several screens and up to 240 W of charging with a suitable cable. When a docking station or monitor 'does not work', check what that specific port and cable support before replacing hardware.",
     "title": "Not every USB-C port is equal"
    },
    {
     "type": "topology",
     "title": "A typical USB-C desk setup",
     "nodes": [
      {
       "id": "mon1",
       "kind": "monitor",
       "label": "Monitor 1",
       "sub": "DisplayPort",
       "x": 1,
       "y": 0
      },
      {
       "id": "mon2",
       "kind": "monitor",
       "label": "Monitor 2",
       "sub": "HDMI",
       "x": 3,
       "y": 0
      },
      {
       "id": "sw",
       "kind": "switch",
       "label": "Office switch",
       "sub": "wired LAN",
       "x": 5,
       "y": 0
      },
      {
       "id": "usb",
       "kind": "host",
       "label": "USB devices",
       "sub": "keyboard, mouse, headset",
       "x": 1,
       "y": 2
      },
      {
       "id": "dock",
       "kind": "process",
       "label": "Docking station",
       "sub": "USB4 / Thunderbolt",
       "x": 3,
       "y": 2
      },
      {
       "id": "pwr",
       "kind": "process",
       "label": "Dock power",
       "sub": "charges the laptop",
       "x": 5,
       "y": 2
      },
      {
       "id": "lap",
       "kind": "laptop",
       "label": "Laptop",
       "sub": "USB-C with video + PD",
       "x": 3,
       "y": 4
      }
     ],
     "links": [
      {
       "a": "lap",
       "b": "dock",
       "label": "one USB-C cable",
       "style": "bold"
      },
      {
       "a": "dock",
       "b": "mon1",
       "label": "DP"
      },
      {
       "a": "dock",
       "b": "mon2",
       "label": "HDMI"
      },
      {
       "a": "dock",
       "b": "sw",
       "label": "Ethernet"
      },
      {
       "a": "dock",
       "b": "usb",
       "label": "USB-A"
      },
      {
       "a": "dock",
       "b": "pwr",
       "label": "DC in"
      }
     ],
     "caption": "One cable carries video, data, network and charging. If one screen or charging fails, check what the laptop port and cable support (video mode, bandwidth, wattage) before blaming the dock."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Power and input",
       "text": "Is the monitor or projector on, and set to the right input source?"
      },
      {
       "title": "Cable and port",
       "text": "Reseat both ends, try a known-good cable and another port."
      },
      {
       "title": "OS display settings",
       "text": "Use the display shortcut (for example Windows key + P on Windows) to choose duplicate or extend, and check resolution and refresh rate."
      },
      {
       "title": "Driver",
       "text": "Update or roll back the graphics driver if the issue began after a change."
      },
      {
       "title": "Hardware",
       "text": "Test the screen with another computer to isolate monitor versus PC."
      }
     ],
     "title": "Display troubleshooting in order"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Laser",
       "items": [
        "Toner fused by heat; fast and cheap per page",
        "Common faults: smudging (fuser), streaks (drum)",
        "Office workgroups"
       ]
      },
      {
       "title": "Inkjet",
       "items": [
        "Liquid ink sprayed through nozzles",
        "Faults: clogged heads, dried ink",
        "Photos and low-volume colour"
       ]
      },
      {
       "title": "Thermal",
       "items": [
        "Heat-sensitive paper or ribbon",
        "Faults: wrong media, dirty print head",
        "Receipts, labels, wristbands in hospitals"
       ]
      }
     ],
     "title": "Printer technologies"
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Application",
       "text": "Sends the document to the OS print system."
      },
      {
       "label": "Driver",
       "text": "Converts it into a language the printer understands."
      },
      {
       "label": "Spooler / queue",
       "text": "Holds jobs and sends them in order."
      },
      {
       "label": "Network or USB",
       "text": "Delivers the data to the printer."
      },
      {
       "label": "Printer",
       "text": "Processes, prints and reports status or errors."
      }
     ],
     "title": "What happens when a user clicks Print"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "Get-Printer | Select-Object Name, PrinterStatus, PortName",
      "Get-PrintJob -PrinterName 'HR-Laser' ",
      "# Remove only the stuck job, not everyone's work",
      "Remove-PrintJob -PrinterName 'HR-Laser' -ID 14",
      "# If the spooler itself is hung, restart the service",
      "Restart-Service -Name Spooler"
     ],
     "title": "Clearing a stuck print queue",
     "note": "Run from an elevated session. Tell users before restarting the spooler on a shared print server, because queued jobs may need to be resent."
    },
    {
     "type": "keypoints",
     "items": [
      "**Battery**: swelling is a safety hazard; stop using the device and replace the battery.",
      "**Charging**: test another cable and charger; clean lint from the port gently.",
      "**Connectivity**: toggle airplane mode, forget and rejoin Wi-Fi, check mobile data limits.",
      "**Email and apps**: confirm account sign-in, MFA and that the device is enrolled in management if required.",
      "**Loss or theft**: report immediately so the device can be located, locked or wiped remotely."
     ],
     "title": "Mobile device support essentials"
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A Gazipur garment factory's packing line stopped because barcode labels were printing faint. The printer had been switched from direct-thermal labels to stock that needs a ribbon. Matching the media setting to the label type fixed it in five minutes; the fix went into the knowledge base for the night shift.",
     "title": "Thermal label printers in a garment factory"
    },
    {
     "type": "scenario",
     "situation": "A guest lecturer at a university in Rajshahi connects a laptop to the hall projector with HDMI. The projector shows 'No signal'. The seminar starts in five minutes.",
     "options": [
      {
       "text": "Check the projector input source, then use the display shortcut to duplicate the screen",
       "feedback": "Correct. 'No signal' means the projector is on but not receiving video. Wrong input or the laptop not sending output are the quickest likely causes.",
       "best": true
      },
      {
       "text": "Replace the projector lamp",
       "feedback": "A dead lamp would show no light at all, not a 'No signal' message.",
       "best": false
      },
      {
       "text": "Reinstall the laptop's graphics driver",
       "feedback": "Possible later, but too slow and unlikely as a first step.",
       "best": false
      },
      {
       "text": "Ask the lecturer to email the slides to the IT office",
       "feedback": "This avoids the problem rather than solving it and delays the seminar.",
       "best": false
      }
     ],
     "title": "Projector before a seminar"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "USB-C",
       "def": "A reversible connector whose capabilities (data speed, video, charging power) depend on the port and cable behind it."
      },
      {
       "term": "DisplayPort",
       "def": "A digital display interface for monitors that carries video and audio and can drive multiple screens."
      },
      {
       "term": "Print spooler",
       "def": "The operating system service that queues print jobs and sends them to printers."
      },
      {
       "term": "Printer driver",
       "def": "Software that translates documents into a language a specific printer understands."
      },
      {
       "term": "Fuser",
       "def": "The heated unit in a laser printer that bonds toner to paper; failure causes smudging."
      },
      {
       "term": "Direct thermal printing",
       "def": "Printing by heating special paper so it darkens, without ink or ribbon."
      },
      {
       "term": "Remote wipe",
       "def": "A management action that erases a lost or stolen device to protect organisational data."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "USB-C is a connector, not a capability: data speed, video and charging depend on the port and cable.",
      "Work through display faults in order: power and input, cable and port, OS settings, driver, hardware.",
      "Remove a single stuck print job before restarting the spooler or reinstalling printers.",
      "Swollen batteries are a safety hazard: stop use and replace.",
      "Report lost or stolen devices at once so they can be locked or wiped."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Laser printer output smears when touched. Which part is most likely failing?",
       "options": [
        "The drum",
        "The fuser",
        "The toner chip",
        "The network card"
       ],
       "answer": 1,
       "explain": "The fuser bonds toner with heat; if it fails, toner smears. Drum faults usually cause repeated marks, and toner chip or network faults stop printing."
      },
      {
       "q": "A monitor connected via USB-C shows nothing, but a USB-C phone charger works in that port. What should you check?",
       "options": [
        "Whether the monitor's brightness is turned fully down",
        "The keyboard driver",
        "Whether the port supports video output",
        "The Wi-Fi password"
       ],
       "answer": 2,
       "explain": "USB-C ports may provide charging without video. The port's DisplayPort Alt Mode or USB4 support decides whether video works."
      },
      {
       "q": "Several users' jobs are stuck behind one corrupted job. What is the best first action?",
       "options": [
        "Remove the single stuck job from the queue",
        "Reinstall the printer on every PC",
        "Replace the printer",
        "Disable the print spooler permanently and use USB printers"
       ],
       "answer": 0,
       "explain": "Removing the corrupted job releases the queue with minimal disruption. Reinstalling, replacing or disabling the spooler are excessive."
      },
      {
       "q": "A phone's battery case is visibly swollen. What should you advise?",
       "options": [
        "Keep using it until it stops charging",
        "Press the case flat",
        "Charge it fully overnight to recalibrate the battery, then check it again",
        "Stop using it, keep it away from heat and arrange a battery replacement"
       ],
       "answer": 3,
       "explain": "Swollen lithium batteries can catch fire, so use should stop and the battery be replaced. Pressing or charging it increases the risk."
      },
      {
       "q": "What should be done FIRST when an employee reports a company phone stolen?",
       "options": [
        "Wait 24 hours in case it is found or handed in at the office reception",
        "Order a new phone",
        "Lock or wipe it through device management and secure the account",
        "Change the Wi-Fi password"
       ],
       "answer": 2,
       "explain": "Speed protects data: locking or wiping and securing accounts limits exposure. Waiting increases risk, and the Wi-Fi password is not the main issue."
      },
      {
       "q": "A laptop that needs 100 W shows a 'slow charger' warning only when connected through a new dock. Monitors and network work. What is the most likely cause?",
       "options": [
        "The second monitor is running at a refresh rate that is far too high",
        "The dock's Ethernet port is connected to a slow switch",
        "The cable or dock delivers less power than the laptop needs",
        "The battery must be fully drained once before docking works"
       ],
       "answer": 2,
       "explain": "Charging power depends on the dock's rating, how much it keeps for itself and the cable's rating. Monitor refresh, network speed and battery draining do not limit the charging wattage."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l5",
   "title": "Building, Upgrading and Repairing a PC",
   "subtitle": "A safe, repeatable process from parts on a bench to a working system",
   "minutes": 30,
   "objectives": [
    "Work safely with electricity, ESD and batteries",
    "Assemble a PC in the correct order and verify it with POST",
    "Use a structured approach to diagnose hardware faults and choose repair or replace",
    "Record builds and repairs so others can support the device later"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Building or repairing a PC is a core support skill even in a cloud-first world. Office desktops, lab machines, kiosks and point-of-sale terminals still need RAM, SSD and power-supply swaps. A methodical builder works safely, checks compatibility before opening the box and documents every change."
    },
    {
     "type": "checklist",
     "title": "Bench safety checklist",
     "items": [
      "Power off, switch off the PSU and unplug the mains cable before opening the case.",
      "Hold the power button for five seconds to discharge residual power.",
      "Wear an antistatic wrist strap clipped to bare metal on the chassis or an ESD mat.",
      "Keep parts in antistatic bags until you install them.",
      "Never open a power supply or monitor: they hold dangerous charge in capacitors.",
      "Lift heavy equipment such as UPS units and servers with your legs, or with help.",
      "Dispose of batteries, toner and e-waste through approved recyclers, not normal rubbish.",
      "Remove watches and rings, and keep drinks off the bench."
     ]
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Prepare the motherboard outside the case",
       "text": "Install the CPU (align the triangle marker), apply thermal paste if the cooler has none, fit the cooler, then the RAM and M.2 SSD."
      },
      {
       "title": "Prepare the case",
       "text": "Fit the I/O shield if separate and check standoffs match the board's mounting holes."
      },
      {
       "title": "Mount the board",
       "text": "Lower it in at an angle into the I/O shield and screw it to the standoffs without overtightening."
      },
      {
       "title": "Install the PSU and power cables",
       "text": "Connect the 24-pin ATX and 8-pin CPU power, then SATA or PCIe power as needed."
      },
      {
       "title": "Add expansion cards and drives",
       "text": "Seat the GPU in the top PCIe x16 slot and secure it; connect SATA drives."
      },
      {
       "title": "Front panel and fans",
       "text": "Connect power switch, LEDs, USB and audio headers and fan cables using the manual's diagram."
      },
      {
       "title": "First boot",
       "text": "Before closing the case, power on, enter UEFI setup, confirm CPU, RAM and drives are detected and temperatures are normal."
      }
     ],
     "title": "Assembly order for a desktop PC"
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Power good",
       "text": "The PSU stabilises voltages and signals the board."
      },
      {
       "label": "POST",
       "text": "Firmware tests CPU, RAM and video; failures produce beep or LED codes."
      },
      {
       "label": "UEFI settings",
       "text": "Firmware reads boot order and Secure Boot settings."
      },
      {
       "label": "Boot loader",
       "text": "Loads from the boot drive's EFI partition."
      },
      {
       "label": "OS kernel",
       "text": "The operating system starts drivers and services."
      }
     ],
     "title": "The boot sequence when you press power"
    },
    {
     "type": "table",
     "head": [
      "Symptom or code",
      "Likely area",
      "Action"
     ],
     "rows": [
      [
       "Memory LED / repeating beeps",
       "RAM",
       "Reseat modules, try one module in the primary slot"
      ],
      [
       "CPU LED",
       "CPU or CPU power",
       "Check 8-pin CPU power, socket pins, cooler pressure"
      ],
      [
       "VGA LED / no display",
       "Graphics",
       "Reseat GPU, connect monitor to the right port, check GPU power"
      ],
      [
       "Boot device LED",
       "Storage or boot order",
       "Check drive detection and UEFI boot order"
      ],
      [
       "Clock reset at every start",
       "CMOS battery",
       "Replace the CR2032 coin cell"
      ]
     ],
     "title": "Reading POST failures"
    },
    {
     "type": "tree",
     "title": "When a PC will not start: a symptom-first decision tree",
     "root": {
      "label": "PC will not start",
      "children": [
       {
        "label": "No lights, no fans",
        "text": "Outlet, PSU switch, known-good cable, then PSU"
       },
       {
        "label": "Fans spin, no display",
        "text": "Read the debug LEDs or beeps",
        "children": [
         {
          "label": "Memory LED",
          "text": "Reseat; one module in primary slot"
         },
         {
          "label": "CPU LED",
          "text": "8-pin CPU power, cooler, socket"
         },
         {
          "label": "VGA LED",
          "text": "GPU seating, power, right port"
         }
        ]
       },
       {
        "label": "Logo, then no OS",
        "text": "Drive detected? UEFI boot order"
       },
       {
        "label": "Starts, then restarts",
        "text": "Temperatures, PSU load, event logs"
       }
      ]
     },
     "caption": "Start from what the user actually sees, then let the board's LEDs or beep codes narrow it down. Each leaf is one safe test to run before any part is replaced."
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "When a system will not POST, strip it to the minimum: board, CPU with cooler, one RAM module and PSU, with on-board video. If it starts, add parts back one at a time. The part that brings the fault back is the culprit.",
     "title": "Minimum-configuration testing"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Repair when",
       "items": [
        "The part is cheap and standard (RAM, SSD, PSU, fan)",
        "The device is within its planned lifecycle",
        "Downtime is acceptable and parts are available",
        "Data or software setup is complex to rebuild"
       ]
      },
      {
       "title": "Replace when",
       "items": [
        "Repair costs exceed about 50% of a new device",
        "The device cannot run a supported OS (for example no TPM 2.0 for Windows 11) or is near end of life",
        "Parts are soldered or proprietary and hard to get",
        "Failures keep repeating on the same model"
       ]
      }
     ],
     "title": "Repair or replace?"
    },
    {
     "type": "case",
     "title": "The lab of twenty slow PCs",
     "context": "A private university in Dhaka has a computer lab of 20 desktops bought in 2020: quad-core CPUs, 8 GB DDR4 (one module), 1 TB HDDs. Students complain that the PCs take four minutes to boot and freeze in programming tools. The budget is limited and the PCs must last two more years. The CPUs are still supported by current Windows and Linux releases.",
     "questions": [
      "What two upgrades would give the biggest improvement per taka spent?",
      "How would you roll the work out without closing the lab for a week?",
      "What would you record for each PC?"
     ],
     "answer": "**Upgrades:** replace each HDD with a 500 GB SATA or NVMe SSD (boot time falls from minutes to seconds) and add a second 8 GB module for 16 GB in dual channel. **Rollout:** build and test one PC as a reference, capture a standard image, then upgrade four or five PCs per evening, deploying the image over the network. **Records:** asset tag, serial, parts installed with serials and warranty dates, image version, date, technician and test results (POST, memory test, boot time)."
    },
    {
     "type": "template",
     "title": "PC build and repair record",
     "purpose": "Record every build or repair so the next technician knows exactly what was changed and why.",
     "columns": [
      "Asset tag",
      "Date",
      "Problem or purpose",
      "Parts installed or replaced",
      "Tests performed",
      "Result",
      "Technician"
     ],
     "example": [
      [
       "LAB-PC-07",
       "2026-03-12",
       "Slow boot, freezing",
       "500 GB NVMe SSD (SN 4F9...), +8 GB DDR4",
       "POST, memory test 1 pass, boot time 18 s",
       "Resolved",
       "N. Akter"
      ]
     ],
     "rows": 6
    },
    {
     "type": "scenario",
     "situation": "You add a second RAM module to a desktop. It powers on, fans spin, but there is no display and the motherboard memory LED stays lit.",
     "options": [
      {
       "text": "Replace the graphics card",
       "feedback": "The board's LED points to memory, not graphics.",
       "best": false
      },
      {
       "text": "Reinstall the operating system",
       "feedback": "The system has not reached the OS; POST is failing.",
       "best": false
      },
      {
       "text": "Replace the power supply",
       "feedback": "Fans spin and the LED identifies memory; power is not the first suspect.",
       "best": false
      },
      {
       "text": "Reseat both modules firmly, then test the new module alone in the primary slot",
       "feedback": "Correct. A partly seated or incompatible module is the most likely cause given the timing and the memory LED.",
       "best": true
      }
     ],
     "title": "No display after a RAM upgrade"
    },
    {
     "type": "reflection",
     "prompt": "Which repair task in this module do you feel least confident about? Write down how you will practise it safely, for example on an old donated PC or in a supervised lab."
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "ESD",
       "def": "Electrostatic discharge: a sudden flow of static electricity that can damage components without visible signs."
      },
      {
       "term": "POST",
       "def": "Power-on self-test: firmware checks of core hardware that run before the operating system loads."
      },
      {
       "term": "UEFI",
       "def": "Unified Extensible Firmware Interface: modern firmware that initialises hardware, offers setup screens and starts the boot loader."
      },
      {
       "term": "CMOS battery",
       "def": "A coin cell on the motherboard that keeps firmware settings and the real-time clock when the PC is unplugged."
      },
      {
       "term": "Standoff",
       "def": "A small spacer that holds the motherboard away from the metal case to prevent short circuits."
      },
      {
       "term": "Thermal paste",
       "def": "A compound that fills microscopic gaps between a CPU and its cooler to improve heat transfer."
      },
      {
       "term": "Minimum configuration",
       "def": "Testing with only the essential parts installed to isolate a hardware fault."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Safety first: power off, unplug, discharge, use ESD protection and never open a PSU.",
      "Assemble in a fixed order and test POST before closing the case.",
      "No POST? Strip to minimum configuration and add parts back one at a time.",
      "Repair cheap standard parts; replace when costs pass about half a new device or OS support ends.",
      "Record every build and repair against the asset tag."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A PC loses its date and time every time it is unplugged. What should you replace?",
       "options": [
        "The PSU",
        "The CMOS battery",
        "The SSD",
        "The RAM"
       ],
       "answer": 1,
       "explain": "The CMOS coin cell keeps the clock and settings without mains power. A PSU, SSD or RAM fault would show other symptoms."
      },
      {
       "q": "Why should you never open a power supply unit during repair?",
       "options": [
        "It voids the operating system licence",
        "It contains toner",
        "It is sealed at the factory, and opening it voids the PSU's warranty",
        "Capacitors inside can hold a dangerous charge even when unplugged"
       ],
       "answer": 3,
       "explain": "PSU capacitors can store lethal charge. Faulty PSUs are replaced as a unit, not repaired by support staff."
      },
      {
       "q": "A new build will not POST. What is the best diagnostic approach?",
       "options": [
        "Replace all the parts at once with new ones from a different supplier",
        "Install the OS from USB",
        "Update the SSD firmware",
        "Strip to minimum configuration and add parts back one at a time"
       ],
       "answer": 3,
       "explain": "Minimum configuration isolates the faulty component systematically. Swapping everything is wasteful, and the OS and SSD firmware are irrelevant before POST succeeds."
      },
      {
       "q": "Repairing a five-year-old laptop's motherboard would cost 70% of a new model, and its OS is near end of support. What should you recommend?",
       "options": [
        "Repair it because repair is always greener",
        "Keep using it without repair",
        "Upgrade its RAM",
        "Replace it and recover the data"
       ],
       "answer": 3,
       "explain": "High repair cost and approaching end of support make replacement the better value. RAM does not fix a failed board."
      },
      {
       "q": "Which is the correct place to clip an antistatic wrist strap?",
       "options": [
        "The plastic front panel",
        "The CPU heatsink fins, because they are the closest metal part",
        "The user's desk lamp",
        "Bare metal on the chassis or a grounded ESD mat"
       ],
       "answer": 3,
       "explain": "The strap must connect you to the same ground potential as the equipment, via bare chassis metal or an ESD mat. Plastic and unrelated objects do not ground you."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m2",
 "order": 2,
 "code": "Boot",
 "title": "Operating Systems: Windows, Linux and macOS",
 "subtitle": "Install, configure and support the three main desktop platforms and mobile devices",
 "outcomes": [
  "Explain OS components, partitioning, file systems and the UEFI boot process",
  "Use Windows tools and PowerShell to diagnose and repair common problems",
  "Work confidently in a Linux shell with permissions, packages, services and logs",
  "Support macOS and mobile devices including encryption, backup and MDM",
  "Deploy standard builds and manage software and licences"
 ],
 "lessons": [
  {
   "id": "m2-l1",
   "title": "Operating System Fundamentals and the Boot Process",
   "subtitle": "What an OS does, how disks are laid out and how a computer starts",
   "minutes": 24,
   "objectives": [
    "Explain the main jobs of an operating system: kernel, drivers, processes, memory and files",
    "Compare GPT and MBR partitioning and common file systems",
    "Describe the UEFI boot process and Secure Boot",
    "Explain OS lifecycles and why unsupported versions are a risk"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "An **operating system** (OS) sits between hardware and the apps people use. It decides which program gets the CPU, hands out memory, talks to devices through drivers and organises data into files. Windows, Linux and macOS look different, but they solve the same problems, so the concepts you learn here transfer across all three."
    },
    {
     "type": "layers",
     "items": [
      {
       "label": "Applications",
       "parts": [
        "Browsers, office suites, line-of-business apps"
       ]
      },
      {
       "label": "User interface",
       "parts": [
        "Desktop shell and windows",
        "Command-line shells: PowerShell, Bash, zsh"
       ]
      },
      {
       "label": "System services",
       "parts": [
        "Networking, printing, updates, logging, security"
       ]
      },
      {
       "label": "Kernel",
       "parts": [
        "Process scheduling",
        "Memory management",
        "File systems",
        "Security enforcement"
       ]
      },
      {
       "label": "Drivers and firmware",
       "parts": [
        "Device drivers",
        "UEFI firmware",
        "Hardware"
       ]
      }
     ],
     "title": "Layers of a modern operating system (top first)"
    },
    {
     "type": "table",
     "head": [
      "Job",
      "What it does",
      "Typical symptom when it fails"
     ],
     "rows": [
      [
       "Process management",
       "Runs programs and shares CPU time",
       "One app hogs CPU; system feels frozen"
      ],
      [
       "Memory management",
       "Allocates RAM and uses disk as overflow",
       "Heavy paging, 'out of memory' errors"
      ],
      [
       "File systems",
       "Organises data into files and folders with permissions",
       "Corrupt files, 'access denied' errors"
      ],
      [
       "Device drivers",
       "Let the OS use hardware",
       "Device missing, crashes after a driver update"
      ],
      [
       "Security",
       "Accounts, permissions, isolation",
       "Users can see or change what they should not"
      ]
     ],
     "title": "Core OS jobs and what breaks when they fail"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "GPT (GUID partition table)",
       "items": [
        "Used with UEFI on modern systems",
        "Supports disks far larger than 2 TiB",
        "Up to 128 partitions by default on Windows",
        "Keeps a backup header at the end of the disk"
       ]
      },
      {
       "title": "MBR (master boot record)",
       "items": [
        "Legacy BIOS-era scheme",
        "Limited to 2 TiB per disk",
        "Four primary partitions",
        "Still seen on old PCs and small USB sticks"
       ]
      }
     ],
     "title": "Partition styles"
    },
    {
     "type": "table",
     "head": [
      "File system",
      "Main OS",
      "Notes"
     ],
     "rows": [
      [
       "NTFS",
       "Windows",
       "Permissions, encryption, journaling; default for Windows system drives"
      ],
      [
       "exFAT",
       "Cross-platform",
       "Large files on USB drives; readable by Windows, macOS and most Linux"
      ],
      [
       "FAT32",
       "Cross-platform",
       "Wide compatibility; 4 GB maximum file size; used for EFI system partitions"
      ],
      [
       "ext4 / XFS / Btrfs",
       "Linux",
       "Journaling Linux file systems; Btrfs adds snapshots"
      ],
      [
       "APFS",
       "macOS",
       "Snapshots, encryption, space sharing between volumes"
      ]
     ],
     "title": "File systems you will meet"
    },
    {
     "type": "tree",
     "title": "Choosing a file system",
     "root": {
      "label": "Where will the volume be used?",
      "children": [
       {
        "label": "Windows system drive",
        "text": "NTFS"
       },
       {
        "label": "USB for Windows and Mac",
        "text": "exFAT (FAT32 only if every file is under 4 GB)"
       },
       {
        "label": "EFI system partition",
        "text": "FAT32"
       },
       {
        "label": "Linux server or desktop",
        "text": "ext4 or XFS; Btrfs for snapshots"
       },
       {
        "label": "Mac startup or Mac-only",
        "text": "APFS"
       }
      ]
     },
     "caption": "Start from where the data must be read and written, not from habit. Most 'file too large' and 'read-only on the Mac' tickets come from picking the wrong branch."
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Firmware",
       "text": "POST, then reads boot entries stored in firmware NVRAM."
      },
      {
       "label": "EFI system partition",
       "text": "Small FAT32 partition holding boot loaders."
      },
      {
       "label": "Secure Boot check",
       "text": "Firmware verifies the boot loader's signature."
      },
      {
       "label": "Boot loader",
       "text": "Loads the kernel and initial drivers."
      },
      {
       "label": "Kernel and services",
       "text": "Mounts file systems, starts services and shows the sign-in screen."
      }
     ],
     "title": "How a UEFI system boots"
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "A UEFI feature that only allows boot loaders and drivers signed by trusted keys to run. It blocks many boot-level rootkits. If you must boot an unsigned tool, turn Secure Boot back on afterwards and record the change.",
     "title": "Secure Boot"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "When a vendor stops supporting an OS version, new vulnerabilities are never patched. Windows 10 reached end of support on 14 October 2025, so PCs that cannot move to Windows 11 need a dated plan: replacement, paid Extended Security Updates (ESU) as a short bridge, or another supported OS. Keep a list of OS versions in use with their end-of-support dates, and plan upgrades a year ahead.",
     "title": "End of support means end of security fixes"
    },
    {
     "type": "timeline",
     "title": "Desktop Windows support milestones",
     "items": [
      {
       "when": "Jul 2015",
       "label": "Windows 10 released",
       "text": "Becomes the main business desktop for a decade."
      },
      {
       "when": "Oct 2021",
       "label": "Windows 11 released",
       "text": "Needs TPM 2.0, UEFI with Secure Boot capability and a supported 64-bit CPU."
      },
      {
       "when": "2024-2025",
       "label": "Windows 11 24H2 and 25H2",
       "text": "Each yearly version gets 24 months of support (Home, Pro) or 36 months (Enterprise, Education)."
      },
      {
       "when": "14 Oct 2025",
       "label": "Windows 10 end of support",
       "text": "Free security updates stop; paid ESU is the only bridge."
      },
      {
       "when": "Oct 2026",
       "label": "Consumer ESU ends",
       "text": "Business ESU can be renewed yearly, at rising cost."
      },
      {
       "when": "Oct 2028",
       "label": "Last year of business ESU",
       "text": "No Windows 10 fixes after this; check the vendor's current timetable."
      }
     ],
     "caption": "Plan replacements against these dates, not against the day a PC breaks. ESU buys time to migrate; it is not a long-term strategy."
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "64-bit OS",
       "items": [
        "Uses far more than 4 GB of RAM",
        "Required for modern apps and security features",
        "Runs most older 32-bit apps"
       ]
      },
      {
       "title": "32-bit OS",
       "items": [
        "Limited to about 4 GB of addressable memory",
        "Largely obsolete on PCs",
        "Cannot run 64-bit apps or drivers"
       ]
      }
     ],
     "title": "32-bit and 64-bit"
    },
    {
     "type": "scenario",
     "situation": "A user tries to copy a 6 GB video onto a new USB stick to show at a partner's office, which uses Macs. The copy fails with 'file too large', although the stick has 30 GB free.",
     "options": [
      {
       "text": "Reformat the stick as NTFS",
       "feedback": "NTFS lifts the size limit but Macs read it only in read-only mode by default, and some devices cannot read it at all.",
       "best": false
      },
      {
       "text": "Compress the file into a ZIP",
       "feedback": "The ZIP will still be larger than 4 GB, so it will fail too.",
       "best": false
      },
      {
       "text": "Buy a bigger USB stick",
       "feedback": "Capacity is not the problem; the FAT32 file-size limit is.",
       "best": false
      },
      {
       "text": "Reformat the stick as exFAT after backing up its contents",
       "feedback": "Correct. exFAT supports large files and is read and written by Windows and macOS.",
       "best": true
      }
     ],
     "title": "A USB stick that will not take a big file"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Operating system",
       "def": "Software that manages hardware and provides services such as processes, memory, files and security for applications."
      },
      {
       "term": "Kernel",
       "def": "The core of the OS that runs with full privileges and controls CPU, memory and devices."
      },
      {
       "term": "Device driver",
       "def": "Software that lets the operating system communicate with a specific piece of hardware."
      },
      {
       "term": "GPT",
       "def": "GUID partition table: the modern disk partitioning scheme used with UEFI, supporting very large disks."
      },
      {
       "term": "File system",
       "def": "The structure an OS uses to store, name and protect files on a volume, such as NTFS, ext4 or APFS."
      },
      {
       "term": "EFI system partition",
       "def": "A small FAT32 partition containing boot loaders used by UEFI firmware."
      },
      {
       "term": "End of support",
       "def": "The date after which a vendor no longer releases security updates or fixes for a product version."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "The kernel, drivers and services do the same jobs on every OS, so concepts transfer.",
      "Modern PCs use UEFI with GPT disks and Secure Boot; MBR is limited to 2 TiB.",
      "Pick the file system by where it will be used: NTFS, exFAT, ext4/XFS or APFS.",
      "Windows 10 support ended on 14 October 2025: track every OS's end-of-support date and plan ahead.",
      "An unsupported OS still runs, but every new vulnerability stays open."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which file system should you choose for a USB drive shared between Windows and macOS that must hold 8 GB files?",
       "options": [
        "exFAT",
        "FAT32",
        "ext4",
        "APFS"
       ],
       "answer": 0,
       "explain": "exFAT handles large files and is supported read-write by both systems. FAT32 has a 4 GB limit; ext4 and APFS are not natively writable on the other OS."
      },
      {
       "q": "A 4 TB disk is initialised as MBR. How much of it can be used?",
       "options": [
        "About 2 TiB",
        "All 4 TB",
        "Exactly 3 TB",
        "Only 512 GB"
       ],
       "answer": 0,
       "explain": "MBR addresses up to 2 TiB. GPT is required to use the full disk."
      },
      {
       "q": "What does Secure Boot primarily protect against?",
       "options": [
        "Phishing emails that contain malicious links or attachments",
        "Unsigned or tampered boot loaders and rootkits",
        "Weak passwords",
        "Overheating"
       ],
       "answer": 1,
       "explain": "Secure Boot verifies signatures of boot components, blocking boot-level malware. It does not address phishing, passwords or heat."
      },
      {
       "q": "Why is running an OS past its end-of-support date risky?",
       "options": [
        "It will stop booting",
        "It cannot connect to Wi-Fi",
        "Its licence becomes illegal to use, and it stops booting after a grace period",
        "New vulnerabilities will not be patched"
       ],
       "answer": 3,
       "explain": "Unsupported systems keep working but receive no security fixes, leaving known holes open."
      },
      {
       "q": "Which component translates OS requests into instructions a specific network card understands?",
       "options": [
        "The device driver",
        "The kernel scheduler",
        "The file system",
        "The boot loader"
       ],
       "answer": 0,
       "explain": "Drivers are hardware-specific translators. The scheduler shares CPU time, the file system stores data and the boot loader starts the kernel."
      },
      {
       "q": "A finance PC still runs Windows 10 in late 2026, and the organisation never bought ESU. Which statement is accurate?",
       "options": [
        "It will stop booting after the end-of-support date unless it is reinstalled",
        "It gets no security fixes, so it should be upgraded, replaced or isolated",
        "Its licence becomes invalid and it can no longer be activated or used legally",
        "It keeps receiving security patches, but new apps can no longer be installed"
       ],
       "answer": 1,
       "explain": "After end of support the OS keeps working but receives no security fixes, so it needs an upgrade, replacement or isolation plan. It does not stop booting, its licence stays valid and patches do not continue."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l2",
   "title": "Windows Essentials for Support",
   "subtitle": "The tools and commands you will use on Windows every day",
   "minutes": 30,
   "objectives": [
    "Navigate Settings, Task Manager, Event Viewer, Services and Device Manager confidently",
    "Use PowerShell for system information, processes, services and logs",
    "Repair system files and use safe mode and recovery options",
    "Explain user account control and edition differences relevant to business"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Windows is still the most common desktop OS in offices, banks, hospitals and universities, so it dominates support queues. You do not need to memorise every menu. You need a reliable toolkit: where to look for evidence, how to stop or restart things safely and how to repair the system without losing user data."
    },
    {
     "type": "table",
     "head": [
      "Tool",
      "Open with",
      "Use it for"
     ],
     "rows": [
      [
       "Settings",
       "Win + I",
       "Accounts, updates, display, apps, privacy"
      ],
      [
       "Task Manager",
       "Ctrl + Shift + Esc",
       "CPU, memory, disk use; end hung apps; startup apps"
      ],
      [
       "Event Viewer",
       "eventvwr.msc",
       "System and application errors with timestamps"
      ],
      [
       "Services",
       "services.msc",
       "Start, stop and set startup type of background services"
      ],
      [
       "Device Manager",
       "devmgmt.msc",
       "Driver status, roll back or update drivers"
      ],
      [
       "Disk Management",
       "diskmgmt.msc",
       "Partitions, drive letters, new disks"
      ],
      [
       "Computer Management",
       "compmgmt.msc",
       "Local users and groups, shares, all of the above in one console"
      ]
     ],
     "title": "The Windows support toolkit"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Home",
       "items": [
        "Consumer use",
        "Cannot join a corporate domain",
        "Limited management features"
       ]
      },
      {
       "title": "Pro / Business",
       "items": [
        "Joins directory domains and cloud identity",
        "Group policy and drive encryption",
        "Remote Desktop host"
       ]
      },
      {
       "title": "Enterprise / Education",
       "items": [
        "Advanced security and management",
        "Licensed through volume agreements",
        "Used by large organisations and universities"
       ]
      }
     ],
     "title": "Business-relevant Windows editions"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell (elevated)",
     "title": "Is this PC ready for Windows 11?",
     "lines": [
      "Get-Tpm | Select-Object TpmPresent, TpmReady, TpmEnabled",
      "(Get-CimInstance -Namespace root/cimv2/security/microsofttpm -ClassName Win32_Tpm).SpecVersion   # must start with 2.0",
      "Confirm-SecureBootUEFI          # True = on; an error usually means legacy BIOS mode",
      "Get-ComputerInfo -Property OsName, OsVersion, BiosFirmwareType",
      "Get-CimInstance Win32_Processor | Select-Object Name   # compare with the supported CPU list"
     ],
     "note": "A PC that reports no TPM often only needs firmware TPM (fTPM or PTT) and Secure Boot switched on in UEFI setup. Record the change on the asset."
    },
    {
     "type": "tree",
     "title": "A Windows 10 PC after end of support",
     "root": {
      "label": "Windows 10 PC",
      "children": [
       {
        "label": "Meets Windows 11 requirements",
        "text": "Pilot, then in-place upgrade"
       },
       {
        "label": "TPM or Secure Boot switched off",
        "text": "Enable in UEFI, recheck, upgrade"
       },
       {
        "label": "Hardware not supported",
        "text": "Plan replacement",
        "children": [
         {
          "label": "Business apps needed",
          "text": "Replace; ESU only while migrating"
         },
         {
          "label": "Kiosk or lab use",
          "text": "Reuse with a supported OS if apps allow"
         }
        ]
       }
      ]
     },
     "caption": "Check the requirements before condemning a PC: many 'unsupported' machines only need a firmware setting. Never leave an unsupported OS on the network without a dated plan."
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "Get-ComputerInfo -Property OsName, OsVersion, CsName, OsLastBootUpTime",
      "Get-Process | Sort-Object CPU -Descending | Select-Object -First 5 Name, CPU, WS",
      "Get-Service -Name Spooler, wuauserv | Select-Object Name, Status, StartType",
      "Restart-Service -Name Spooler",
      "Get-WinEvent -LogName System -MaxEvents 20 | Where-Object LevelDisplayName -eq 'Error'",
      "Get-CimInstance Win32_StartupCommand | Select-Object Name, Command"
     ],
     "title": "Everyday diagnostics in PowerShell",
     "note": "Everything here is read-only except Restart-Service, which needs an elevated (Run as administrator) session."
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Look at the System and Application logs around the time of the problem. Note the **source** and **event ID**, then search your knowledge base. An unexpected shutdown, a disk warning and a driver crash look identical to a user, but very different in the logs.",
     "title": "Event Viewer turns guesses into evidence"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "# Run in an elevated session. Repair the component store first, then system files",
      "DISM /Online /Cleanup-Image /ScanHealth",
      "DISM /Online /Cleanup-Image /RestoreHealth",
      "sfc /scannow",
      "# Review results, then restart if repairs were made",
      "Restart-Computer -Confirm"
     ],
     "title": "Repairing system files"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Restart and undo the last change",
       "text": "Uninstall the latest update or app, or roll back a driver in Device Manager."
      },
      {
       "title": "Safe mode",
       "text": "Boot with minimal drivers and services to remove a problem driver or malware."
      },
      {
       "title": "System Restore",
       "text": "Return system files and settings to a restore point without touching personal files, if enabled."
      },
      {
       "title": "Startup repair",
       "text": "Use the Windows Recovery Environment to fix boot files."
      },
      {
       "title": "Reset this PC",
       "text": "Reinstall Windows keeping or removing files; back up first."
      },
      {
       "title": "Reimage",
       "text": "Deploy the organisation's standard image, then restore user data from backup or cloud."
      }
     ],
     "title": "Recovery options from least to most disruptive"
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "UAC runs even administrators with standard rights until a task needs elevation, then asks for consent or credentials. It limits the damage a mistake or malicious program can do. Do not disable it to 'save time'.",
     "title": "User Account Control (UAC)"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "The registry holds Windows and app settings. Edit it only when a trusted, documented fix requires it, export the key first and never run 'registry cleaner' tools. A wrong change can stop the PC from booting.",
     "title": "The registry is not a playground"
    },
    {
     "type": "scenario",
     "situation": "A loan officer at a microfinance office in Bogura says her PC has been slow since yesterday. Task Manager shows 100% disk activity from an indexing service and an update installing in the background. The PC has an HDD.",
     "options": [
      {
       "text": "Disable the update service permanently",
       "feedback": "Blocking updates creates security risk and violates policy.",
       "best": false
      },
      {
       "text": "Explain that the update is finishing, let it complete, check again after a restart and log the HDD for an SSD upgrade",
       "feedback": "Correct. You confirm the evidence, avoid harmful shortcuts and fix the underlying weakness: a slow disk.",
       "best": true
      },
      {
       "text": "Reset the PC to factory settings",
       "feedback": "Far too disruptive for a temporary, explained cause.",
       "best": false
      },
      {
       "text": "Run a registry cleaner",
       "feedback": "Registry cleaners do not help disk-bound slowness and can break the system.",
       "best": false
      }
     ],
     "title": "Slow PC after an update"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Task Manager",
       "def": "A Windows tool to view and end processes, monitor performance and manage startup apps."
      },
      {
       "term": "Event Viewer",
       "def": "The Windows console that displays system, security and application logs with event IDs and timestamps."
      },
      {
       "term": "Windows service",
       "def": "A background program that starts with the system and runs without user interaction, such as the print spooler."
      },
      {
       "term": "SFC",
       "def": "System File Checker: scans and restores protected Windows system files."
      },
      {
       "term": "DISM",
       "def": "Deployment Image Servicing and Management: repairs the Windows component store and images."
      },
      {
       "term": "Safe mode",
       "def": "A diagnostic start-up mode that loads only essential drivers and services."
      },
      {
       "term": "User Account Control",
       "def": "A Windows feature that requires consent or credentials before tasks run with administrative rights."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Event Viewer turns guesses into evidence: note the source, event ID and time.",
      "Repair system files with DISM first, then sfc.",
      "Use the least disruptive recovery option that fixes the fault, from rollback up to reimage.",
      "Windows 11 needs TPM 2.0, Secure Boot-capable UEFI and a supported CPU; check before you upgrade or replace.",
      "Keep UAC on and edit the registry only with a documented fix and a backup of the key."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which tool shows the timestamp and event ID of an unexpected shutdown?",
       "options": [
        "Event Viewer",
        "Device Manager",
        "Disk Management",
        "Settings > Personalisation"
       ],
       "answer": 0,
       "explain": "Event Viewer records system events with IDs and times. The other tools manage devices, disks and appearance."
      },
      {
       "q": "What is the recommended order when repairing corrupted Windows system files?",
       "options": [
        "sfc then DISM",
        "chkdsk then reset the PC",
        "DISM RestoreHealth then sfc /scannow",
        "Registry cleaner then sfc"
       ],
       "answer": 2,
       "explain": "DISM repairs the component store that sfc uses as its source, so run DISM first, then sfc."
      },
      {
       "q": "A new graphics driver causes crashes on start-up. Which is the least disruptive fix?",
       "options": [
        "Reset this PC",
        "Reimage the laptop",
        "Boot to safe mode and roll back the driver",
        "Replace the graphics card with a model from a different manufacturer"
       ],
       "answer": 2,
       "explain": "Safe mode loads basic drivers so you can roll back the faulty one. Resetting or reimaging is more disruptive; hardware is not at fault."
      },
      {
       "q": "Which Windows edition cannot join a corporate directory domain?",
       "options": [
        "Pro",
        "Enterprise",
        "Education",
        "Home"
       ],
       "answer": 3,
       "explain": "Home lacks domain join. Pro, Enterprise and Education support it."
      },
      {
       "q": "Why should UAC stay enabled for administrators?",
       "options": [
        "It speeds up the system",
        "It is required for Wi-Fi and for network drives to connect at sign-in",
        "It encrypts the disk",
        "It stops admin rights being used silently by mistakes or malware"
       ],
       "answer": 3,
       "explain": "UAC requires consent for elevation, reducing silent misuse. It does not affect speed, Wi-Fi or encryption."
      },
      {
       "q": "A 2020 desktop fails the Windows 11 check only because 'TPM 2.0 not detected'. Its CPU is on the supported list. What should you try first?",
       "options": [
        "Buy and fit a plug-in TPM module from an online marketplace first",
        "Replace the motherboard and CPU with a newer supported generation",
        "Keep Windows 10, since the PC still works and the data is safe",
        "Turn on firmware TPM and Secure Boot in UEFI, then recheck"
       ],
       "answer": 3,
       "explain": "Most PCs from that era have a firmware TPM that is simply switched off. Buying parts or replacing the board is unnecessary, and staying on Windows 10 leaves it unpatched."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l3",
   "title": "Linux Essentials",
   "subtitle": "Distributions, the shell, files, permissions, packages and services",
   "minutes": 32,
   "objectives": [
    "Navigate the Linux file hierarchy and use core shell commands safely",
    "Read and change file permissions and ownership",
    "Install and update software with package managers",
    "Manage services and read logs with systemd tools"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Linux runs most of the world's servers, cloud workloads, network appliances and many developer laptops. Support specialists meet it on web servers, lab machines, kiosks and cloud instances. The good news: a few dozen commands cover most support work, and they are the same across distributions."
    },
    {
     "type": "table",
     "head": [
      "Family",
      "Examples",
      "Package tool",
      "Common in"
     ],
     "rows": [
      [
       "Debian-based",
       "Debian, Ubuntu, Linux Mint",
       "apt",
       "Desktops, cloud servers, education"
      ],
      [
       "Red Hat-based",
       "RHEL, Rocky Linux, AlmaLinux, Fedora",
       "dnf",
       "Enterprise servers"
      ],
      [
       "SUSE",
       "openSUSE, SLES",
       "zypper",
       "Enterprise, Europe"
      ],
      [
       "Others",
       "Arch, Alpine",
       "pacman, apk",
       "Enthusiasts, containers"
      ]
     ],
     "title": "Distribution families"
    },
    {
     "type": "tree",
     "title": "Key Linux directories",
     "root": {
      "label": "/",
      "text": "Top of the tree; /root is the root user's home",
      "children": [
       {
        "label": "/home",
        "text": "Users' personal folders"
       },
       {
        "label": "/etc",
        "text": "System configuration files"
       },
       {
        "label": "/var",
        "text": "Data that changes",
        "children": [
         {
          "label": "/var/log",
          "text": "Log files"
         }
        ]
       },
       {
        "label": "/usr",
        "text": "Installed software",
        "children": [
         {
          "label": "/usr/bin",
          "text": "Programs"
         }
        ]
       },
       {
        "label": "/tmp",
        "text": "Temporary, often cleared at boot"
       },
       {
        "label": "/mnt, /media",
        "text": "Extra disks and USB drives"
       }
      ]
     },
     "caption": "Everything hangs from a single root, even extra disks, which are mounted into the tree. When a ticket mentions settings, look in /etc; when it mentions errors, look in /var/log or the journal."
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "pwd                      # where am I?",
      "ls -lah /var/log         # long listing incl. hidden files and sizes",
      "cd ~/Documents",
      "cat /etc/os-release      # distribution and version",
      "tail -n 50 /var/log/syslog   # if rsyslog is installed; otherwise: journalctl -n 50",
      "grep -i error /var/log/syslog | tail -n 20",
      "du -sh ~/* | sort -h     # which folders use the most space"
     ],
     "title": "Moving around and inspecting files"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "`sudo` runs a command as root, with no safety net. `rm -r` deletes without a recycle bin. Read every command twice before pressing Enter, never paste commands you do not understand from the internet and prefer moving files to a backup folder over deleting them.",
     "title": "Respect sudo and rm"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Owner (rwx)",
       "items": [
        "Read, write and execute",
        "Usually the user who created the file"
       ]
      },
      {
       "title": "Group (r-x)",
       "items": [
        "Read and execute, no write",
        "Members of the file's group"
       ]
      },
      {
       "title": "Others (---)",
       "items": [
        "No access at all",
        "Everyone else on the system"
       ]
      }
     ],
     "title": "Reading permissions: -rwxr-x---"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Permission values",
       "expr": "read = 4, write = 2, execute = 1",
       "meaning": "Add the values for each of owner, group and others."
      },
      {
       "name": "Example 750",
       "expr": "owner 7 (4+2+1), group 5 (4+1), others 0",
       "meaning": "Owner full control, group can read and run, others nothing; same as rwxr-x---."
      },
      {
       "name": "Example 640",
       "expr": "owner 6 (4+2), group 4, others 0",
       "meaning": "Typical for a private config file the service group must read."
      }
     ],
     "title": "Numeric (octal) permissions"
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "ls -l report.sh",
      "-rw-r--r-- 1 rahim staff 1204 Mar 3 10:15 report.sh",
      "chmod 750 report.sh                  # owner rwx, group r-x, others none",
      "sudo chown rahim:finance report.sh   # owner rahim, group finance",
      "ls -l report.sh",
      "-rwxr-x--- 1 rahim finance 1204 Mar 3 10:15 report.sh"
     ],
     "title": "Changing permissions and ownership"
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "sudo apt update && sudo apt upgrade     # Debian/Ubuntu",
      "sudo dnf upgrade                         # RHEL family",
      "sudo apt install cups                    # install a package",
      "systemctl status cups                    # is the service running?",
      "sudo systemctl restart cups",
      "sudo systemctl enable --now ssh          # start now and at every boot",
      "journalctl -u cups --since '1 hour ago'  # logs for one service"
     ],
     "title": "Packages and services"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Granting everyone read, write and execute 'makes the error go away' but opens the file to every user and process. Find out which user or group really needs access and grant just that.",
     "title": "Never use chmod 777 as a fix"
    },
    {
     "type": "scenario",
     "situation": "A small web application on a Linux server in a Dhaka software house cannot save uploaded files. The log says 'Permission denied' on /srv/app/uploads. The app runs as user `www-data`. The folder is owned by `deploy:deploy` with mode 755.",
     "options": [
      {
       "text": "Change the group of the uploads folder to www-data and set mode 775 on that folder only",
       "feedback": "Correct. The app's user gains write access through the group, nothing else changes and other users still cannot write.",
       "best": true
      },
      {
       "text": "Run chmod -R 777 /srv/app",
       "feedback": "This makes every file writable by every user and process: a serious security hole.",
       "best": false
      },
      {
       "text": "Run the web app as root",
       "feedback": "Running a web-facing service as root means any bug becomes full system compromise.",
       "best": false
      },
      {
       "text": "Reinstall the web server package",
       "feedback": "The software is not broken; the permissions are.",
       "best": false
      }
     ],
     "title": "Web app cannot write uploads"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Distribution",
       "def": "A packaged Linux operating system combining the kernel, tools, package manager and defaults, such as Debian or Rocky Linux."
      },
      {
       "term": "Shell",
       "def": "A command-line interpreter, such as Bash or zsh, that runs commands and scripts."
      },
      {
       "term": "root",
       "def": "The Linux superuser account with unrestricted access to the system."
      },
      {
       "term": "sudo",
       "def": "A command that lets an authorised user run a single command with elevated privileges, with logging."
      },
      {
       "term": "chmod",
       "def": "The command that changes read, write and execute permissions on files and directories."
      },
      {
       "term": "Package manager",
       "def": "A tool such as apt or dnf that installs, updates and removes software from trusted repositories."
      },
      {
       "term": "systemd",
       "def": "The init and service manager on most modern Linux distributions, controlled with systemctl and logged with journalctl."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "A few dozen commands cover most Linux support work on any distribution.",
      "Read permissions as owner, group, others; in numbers read = 4, write = 2, execute = 1.",
      "Grant only the user or group that needs access; chmod 777 is never a fix.",
      "Use apt or dnf for packages, systemctl for services and journalctl for logs.",
      "Treat sudo and rm with respect: read every command twice."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What numeric mode gives the owner full access, the group read and execute, and others nothing?",
       "options": [
        "777",
        "755",
        "640",
        "750"
       ],
       "answer": 3,
       "explain": "7 = rwx, 5 = r-x, 0 = none, so 750. 755 lets others read and execute; 777 opens everything; 640 removes execute."
      },
      {
       "q": "Which command shows recent log entries for only the ssh service on a systemd system?",
       "options": [
        "cat /etc/ssh",
        "systemctl enable ssh",
        "ls /var/ssh",
        "journalctl -u ssh"
       ],
       "answer": 3,
       "explain": "journalctl -u filters the journal by unit. The other commands read config, enable start-up or list a non-standard path."
      },
      {
       "q": "Where are most system-wide configuration files stored?",
       "options": [
        "/home",
        "/etc",
        "/tmp",
        "/usr/bin"
       ],
       "answer": 1,
       "explain": "/etc holds configuration; /home has user files, /tmp temporary data and /usr/bin programs."
      },
      {
       "q": "A user on Rocky Linux needs to apply all updates. Which command is correct?",
       "options": [
        "sudo apt upgrade",
        "sudo dnf upgrade",
        "sudo zypper update",
        "sudo pacman -Syu"
       ],
       "answer": 1,
       "explain": "Rocky is in the Red Hat family, which uses dnf. The others belong to Debian, SUSE and Arch families."
      },
      {
       "q": "Why is chmod 777 a poor fix for a permission error?",
       "options": [
        "It is slower",
        "It only works on directories, so files inside them keep the old permissions",
        "It grants every user and process full access, creating a security risk",
        "It deletes the file's owner"
       ],
       "answer": 2,
       "explain": "777 removes all access control. The proper fix grants only the needed user or group."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l4",
   "title": "macOS and Mobile Operating Systems",
   "subtitle": "Supporting Macs, iPhones, iPads and Android devices in the workplace",
   "minutes": 26,
   "objectives": [
    "Use macOS support tools: System Settings, Activity Monitor, Console, Disk Utility and Terminal",
    "Explain FileVault, Time Machine and macOS recovery",
    "Compare iOS/iPadOS and Android management and support basics",
    "Describe how mobile device management enrols and protects devices"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Macs are common among designers, executives, developers and universities, and almost every employee now carries a smartphone with work email. Support specialists are expected to help on all of them. macOS is UNIX-based, so many Linux commands work in its Terminal, but its management tools and recovery steps are its own."
    },
    {
     "type": "table",
     "head": [
      "Tool",
      "Find it",
      "Use it for"
     ],
     "rows": [
      [
       "System Settings",
       "Apple menu",
       "Users, network, privacy and security, updates"
      ],
      [
       "Activity Monitor",
       "Applications > Utilities",
       "CPU, memory, energy, disk and network per process"
      ],
      [
       "Console",
       "Applications > Utilities",
       "System logs and crash reports"
      ],
      [
       "Disk Utility",
       "Applications > Utilities",
       "First Aid repairs, formatting, APFS volumes"
      ],
      [
       "Terminal",
       "Applications > Utilities",
       "Shell commands (zsh by default)"
      ],
      [
       "Keychain Access",
       "Applications > Utilities",
       "Stored passwords and certificates"
      ]
     ],
     "title": "macOS support tools"
    },
    {
     "type": "cli",
     "device": "macOS Terminal",
     "lines": [
      "sw_vers                                  # macOS version and build",
      "system_profiler SPHardwareDataType       # model, chip, memory, serial",
      "diskutil list                            # disks and APFS volumes",
      "softwareupdate --list                    # available updates",
      "networksetup -listallhardwareports       # network interfaces",
      "fdesetup status                          # is FileVault on?",
      "top -o cpu -l 1 | head -n 20             # top processes by CPU"
     ],
     "title": "Useful macOS Terminal commands"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "FileVault",
       "items": [
        "Full-disk encryption of the startup volume",
        "Recovery key must be escrowed by IT or management",
        "Protects data if the Mac is lost"
       ]
      },
      {
       "title": "Time Machine",
       "items": [
        "Automatic hourly backups to an external or network disk",
        "Restore single files or a whole Mac",
        "Should be paired with off-site or cloud copies"
       ]
      },
      {
       "title": "Gatekeeper and updates",
       "items": [
        "Blocks unsigned or unnotarised apps by default",
        "Urgent security fixes can arrive between full updates",
        "Keep automatic updates on"
       ]
      }
     ],
     "title": "Protecting a Mac"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Restart into Recovery",
       "text": "Hold the power button on Apple silicon Macs until options appear (or Command-R on older Intel Macs)."
      },
      {
       "title": "Run Disk Utility First Aid",
       "text": "Check and repair the startup volume."
      },
      {
       "title": "Restore from Time Machine",
       "text": "If data or settings are damaged and a backup exists."
      },
      {
       "title": "Reinstall macOS",
       "text": "Reinstalls the OS while keeping user data on the volume."
      },
      {
       "title": "Erase and reinstall",
       "text": "Last resort after confirming a backup, for example before reassigning a Mac to a new employee."
      }
     ],
     "title": "macOS recovery path"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "iOS / iPadOS",
       "items": [
        "Single vendor controls hardware and updates",
        "Apps from the official store; strong sandboxing",
        "Supervision and automated enrolment for company-owned devices",
        "Updates available to all supported devices at once"
       ]
      },
      {
       "title": "Android",
       "items": [
        "Many manufacturers and versions",
        "Update speed varies by maker and carrier",
        "Work profile separates company apps from personal ones",
        "Check monthly security patch level in settings"
       ]
      }
     ],
     "title": "Mobile platforms"
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Enrol",
       "text": "The device registers with the MDM service, automatically or by the user."
      },
      {
       "label": "Apply profile",
       "text": "Wi-Fi, email, VPN and passcode rules are pushed."
      },
      {
       "label": "Deploy apps",
       "text": "Approved apps install silently or from a company portal."
      },
      {
       "label": "Monitor compliance",
       "text": "OS version, encryption and jailbreak status are checked."
      },
      {
       "label": "Act",
       "text": "Lock, locate or wipe company data when lost or when the employee leaves."
      }
     ],
     "title": "How mobile device management (MDM) works"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "For bring-your-own-device (BYOD), a work profile or app-level protection lets IT wipe **only company data** when someone leaves, without touching personal photos. This is easier to explain to staff and respects privacy.",
     "title": "Personal phones and company data"
    },
    {
     "type": "matrix",
     "title": "How much to manage a mobile device",
     "x": "Company ownership of the device",
     "y": "Sensitivity of the data on it",
     "quadrants": [
      {
       "title": "Work profile + app protection",
       "items": [
        "Access only from approved apps",
        "Selective wipe of company data"
       ]
      },
      {
       "title": "Full management (supervised)",
       "items": [
        "Encryption, passcode, compliance checks",
        "Lock, locate and full wipe"
       ]
      },
      {
       "title": "Light touch",
       "items": [
        "Web or app access with MFA",
        "No device enrolment"
       ]
      },
      {
       "title": "Standard baseline",
       "items": [
        "Automated enrolment",
        "Standard apps and update rules"
       ]
      }
     ],
     "caption": "Control grows with data sensitivity and with company ownership. Personal phones that hold sensitive data get a work profile, not full device control, which respects privacy and still protects the data."
    },
    {
     "type": "scenario",
     "situation": "A marketing manager changed her network password on a Windows PC. Now her Mac keeps asking for her old password to unlock the keychain, and Wi-Fi and email prompts appear repeatedly.",
     "options": [
      {
       "text": "Erase the Mac and reinstall macOS",
       "feedback": "Far too drastic for a keychain password mismatch.",
       "best": false
      },
      {
       "text": "Disable FileVault",
       "feedback": "Disk encryption is unrelated to keychain prompts and should stay on.",
       "best": false
      },
      {
       "text": "Update the login keychain password to the new account password, or create a new default keychain if the old password is unknown",
       "feedback": "Correct. The keychain is still locked with the old password; aligning it stops the prompts.",
       "best": true
      },
      {
       "text": "Tell her to stop using the Mac until the next update",
       "feedback": "This leaves the user unproductive and the problem unsolved.",
       "best": false
      }
     ],
     "title": "Mac user locked out after a password change"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "FileVault",
       "def": "macOS full-disk encryption for the startup volume, unlocked with the user's password or a recovery key."
      },
      {
       "term": "Time Machine",
       "def": "The built-in macOS backup feature that keeps hourly, daily and weekly versions of files."
      },
      {
       "term": "APFS",
       "def": "Apple File System: the macOS file system with snapshots, encryption and space sharing."
      },
      {
       "term": "Keychain",
       "def": "The macOS store for passwords, certificates and keys, unlocked by the user's login password."
      },
      {
       "term": "MDM",
       "def": "Mobile device management: a service that enrols, configures, monitors and secures phones, tablets and computers."
      },
      {
       "term": "Work profile",
       "def": "A separated, managed container on a mobile device for company apps and data."
      },
      {
       "term": "BYOD",
       "def": "Bring your own device: a policy that lets employees use personal devices for work under agreed controls."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "macOS has its own tools: Activity Monitor, Console, Disk Utility and Terminal (zsh).",
      "FileVault recovery keys must be escrowed before anyone needs them.",
      "Follow the recovery path from First Aid to erase-and-reinstall, backing up first.",
      "MDM enrols, configures, monitors and can lock or wipe devices.",
      "For BYOD, separate and wipe only company data."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which macOS command confirms whether disk encryption is enabled?",
       "options": [
        "fdesetup status",
        "sw_vers",
        "diskutil list",
        "softwareupdate --list"
       ],
       "answer": 0,
       "explain": "fdesetup status reports FileVault state. sw_vers shows the version, diskutil lists disks and softwareupdate lists updates."
      },
      {
       "q": "A departing employee used a personal Android phone with a work profile. What should IT do?",
       "options": [
        "Remove the work profile and company data only",
        "Factory-reset the whole phone",
        "Ask the employee to keep using company email until the contract fully ends",
        "Do nothing"
       ],
       "answer": 0,
       "explain": "Removing the work profile protects company data and leaves personal data untouched."
      },
      {
       "q": "What should be done before using 'erase and reinstall' on a Mac?",
       "options": [
        "Disable Gatekeeper",
        "Confirm a current backup and the FileVault recovery key status",
        "Install a third-party antivirus product and run a full scan of the disk",
        "Change the Wi-Fi channel"
       ],
       "answer": 1,
       "explain": "Erasing destroys data, so a verified backup is essential. The other actions do not protect data."
      },
      {
       "q": "Why do Android security patch levels vary between devices of the same OS version?",
       "options": [
        "Android has no updates",
        "Users cannot see the patch level, so devices never report which updates they have",
        "Manufacturers and carriers deliver updates on their own schedules",
        "Patches only apply to tablets"
       ],
       "answer": 2,
       "explain": "The maker and carrier control rollout, so patch levels differ. The patch level is visible in settings."
      },
      {
       "q": "Which MDM action best protects a lost company-owned tablet holding patient records?",
       "options": [
        "Change its wallpaper",
        "Remote lock and, if not recovered, remote wipe",
        "Disable Bluetooth",
        "Reduce screen brightness and disable notifications on the lock screen"
       ],
       "answer": 1,
       "explain": "Locking and wiping prevent data access. The other actions do not protect data."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l5",
   "title": "Installing, Imaging and Managing Software",
   "subtitle": "Clean installs, images, drivers, packages and licences",
   "minutes": 28,
   "objectives": [
    "Choose between clean install, in-place upgrade and imaging",
    "Create bootable installers and use virtual machines for testing",
    "Install, update and remove software with package managers on each OS",
    "Track licences and follow a standard build"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Every new starter needs a working machine on day one, and every broken machine needs to return to a known-good state fast. Organisations solve both with **standard builds**: a documented OS, settings and app list, deployed the same way every time. Your job is to install cleanly, keep software current and avoid unlicensed or unknown software."
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Clean install",
       "items": [
        "Wipe and install fresh",
        "Removes accumulated problems",
        "Needs backup and reinstall of apps"
       ]
      },
      {
       "title": "In-place upgrade",
       "items": [
        "Moves to a newer version keeping apps and data",
        "Faster for users",
        "Can carry old problems forward"
       ]
      },
      {
       "title": "Image or zero-touch provisioning",
       "items": [
        "Standard image, or a device registered to the organisation that sets itself up over the internet",
        "Consistent and fast at scale",
        "Images and profiles must be kept current"
       ]
      }
     ],
     "title": "Ways to deploy an operating system"
    },
    {
     "type": "sequence",
     "title": "Zero-touch provisioning of a company laptop",
     "actors": [
      "Supplier",
      "New laptop",
      "Enrolment service",
      "Cloud MDM",
      "User"
     ],
     "steps": [
      {
       "from": 0,
       "to": 2,
       "label": "Registers serial to the organisation",
       "note": "at purchase"
      },
      {
       "from": 1,
       "to": 2,
       "label": "First boot: who manages me?"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Your organisation's MDM",
       "reply": true
      },
      {
       "from": 4,
       "to": 1,
       "label": "Signs in with work account + MFA"
      },
      {
       "from": 1,
       "to": 3,
       "label": "Enrols with MDM"
      },
      {
       "from": 3,
       "to": 1,
       "label": "Policies, encryption, apps",
       "reply": true
      },
      {
       "from": 1,
       "to": 3,
       "label": "Reports compliance"
      },
      {
       "from": 1,
       "to": 4,
       "label": "Desktop ready, apps installing",
       "reply": true
      }
     ],
     "caption": "The laptop never visits an IT bench: ownership is registered at purchase, and its first internet connection pulls the organisation's settings. Notice that the user's MFA sign-in is what ties the device to a person."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Back up",
       "text": "Copy user data and note installed apps, printers and licences."
      },
      {
       "title": "Prepare media",
       "text": "Download the official ISO and write it to a USB stick with a trusted tool; verify the checksum."
      },
      {
       "title": "Set firmware",
       "text": "Enable UEFI mode and Secure Boot; set the USB stick as a one-time boot device."
      },
      {
       "title": "Install",
       "text": "Delete old partitions if wiping, let the installer create GPT partitions and install."
      },
      {
       "title": "Drivers and updates",
       "text": "Install chipset, network and graphics drivers, then all OS updates."
      },
      {
       "title": "Apps and settings",
       "text": "Install the standard app set, join the domain or cloud identity, apply policies."
      },
      {
       "title": "Restore and verify",
       "text": "Restore user data, test sign-in, printing, network drives and email with the user."
      }
     ],
     "title": "Clean install checklist"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "Get-FileHash .\\installer.iso -Algorithm SHA256",
      "# Compare the output with the checksum published on the official download page",
      "# Linux equivalent:",
      "# sha256sum installer.iso"
     ],
     "title": "Verifying a download before you trust it"
    },
    {
     "type": "table",
     "head": [
      "Platform",
      "Tool",
      "Install example",
      "Update all"
     ],
     "rows": [
      [
       "Windows",
       "winget",
       "winget install --id Mozilla.Firefox -e",
       "winget upgrade --all"
      ],
      [
       "Debian / Ubuntu",
       "apt",
       "sudo apt install vlc",
       "sudo apt update && sudo apt upgrade"
      ],
      [
       "RHEL family",
       "dnf",
       "sudo dnf install vlc",
       "sudo dnf upgrade"
      ],
      [
       "macOS",
       "App Store, MDM or a community package manager",
       "Install through the company portal",
       "softwareupdate --install --all (OS updates)"
      ]
     ],
     "title": "Package managers by platform"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "winget list --name zoom",
      "winget upgrade",
      "winget uninstall --id Zoom.Zoom -e",
      "# Linux:",
      "# apt list --installed | grep -i zoom",
      "# sudo apt remove zoom"
     ],
     "title": "Finding and removing software"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "A hypervisor on your own PC lets you install an OS or app in a **virtual machine**, take a snapshot, test and roll back in seconds. Test new images, risky updates and unfamiliar software there before touching a user's laptop.",
     "title": "Test in a virtual machine first"
    },
    {
     "type": "keypoints",
     "items": [
      "**Per user or per device** subscriptions are common for productivity and security tools.",
      "**Volume licences** cover many installations under one agreement.",
      "**Open-source** licences allow free use but have conditions, especially on redistribution.",
      "**Freeware for personal use** is often not licensed for business use.",
      "Unlicensed software brings legal, financial and security risk; keep records of every licence."
     ],
     "title": "Software licensing in plain terms"
    },
    {
     "type": "case",
     "title": "New starters at a mobile financial services company",
     "context": "A fast-growing MFS provider in Dhaka hires 25 customer-care agents each month. IT currently installs Windows and 14 apps by hand on each laptop, taking about four hours per machine. Settings differ between machines, and two agents found that the softphone app was missing on their first day.",
     "questions": [
      "What deployment approach would you propose?",
      "How would you keep the standard build current?",
      "How would you prove each laptop is ready before handover?"
     ],
     "answer": "**Approach:** define a documented standard build and use automated provisioning (an image or cloud-based enrolment plus a package manager script) so a laptop is ready in under an hour with identical settings. **Keeping it current:** one owner reviews the build monthly, updates app versions and drivers, tests in a VM and a pilot laptop, and records the version number. **Readiness:** a handover checklist run on every laptop: sign-in works, softphone registers, VPN connects, printing tested, encryption on, endpoint protection reporting, user confirms."
    },
    {
     "type": "template",
     "title": "Standard workstation build sheet",
     "purpose": "Define exactly what a standard machine contains so every build is identical and auditable.",
     "columns": [
      "Item",
      "Version or setting",
      "Install method",
      "Licence or source",
      "Verified by"
     ],
     "example": [
      [
       "Operating system",
       "Windows Pro, latest feature update",
       "Image v2026.04",
       "Volume agreement",
       "Build test"
      ],
      [
       "Softphone client",
       "Approved current version",
       "winget script",
       "Per-user subscription",
       "Test call to extension 100"
      ]
     ],
     "rows": 8
    },
    {
     "type": "scenario",
     "situation": "A researcher at a Chattogram university asks you to install a free PDF converter she found online. It is 'free for personal use' and not on the approved software list.",
     "options": [
      {
       "text": "Install it because it is free",
       "feedback": "Personal-use licences usually exclude work use, and unknown sources can carry malware.",
       "best": false
      },
      {
       "text": "Give her admin rights so she can install it herself",
       "feedback": "This bypasses controls and increases risk for every future installation.",
       "best": false
      },
      {
       "text": "Explain the policy, suggest an approved tool that does the same job, or raise a software request for review",
       "feedback": "Correct. You meet the need without legal or security risk and keep the process transparent.",
       "best": true
      },
      {
       "text": "Refuse without explanation",
       "feedback": "Users who feel ignored find workarounds; explain and offer an alternative.",
       "best": false
      }
     ],
     "title": "A user wants to install a free tool"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Clean install",
       "def": "Installing an OS on a wiped disk so no previous settings, apps or problems remain."
      },
      {
       "term": "In-place upgrade",
       "def": "Upgrading an OS to a newer version while keeping installed apps, settings and data."
      },
      {
       "term": "Disk image",
       "def": "A complete copy of a configured system used to deploy identical builds to many machines."
      },
      {
       "term": "Checksum (hash)",
       "def": "A value calculated from a file's contents, used to confirm the file is genuine and undamaged."
      },
      {
       "term": "Virtual machine",
       "def": "A software-based computer running on a hypervisor, isolated from the host and other VMs."
      },
      {
       "term": "Snapshot",
       "def": "A saved point-in-time state of a VM or volume that can be restored quickly."
      },
      {
       "term": "Software licence",
       "def": "A legal agreement setting how software may be installed and used, such as per user, per device or volume."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Standard builds make every machine predictable and every rebuild fast.",
      "Zero-touch provisioning ships devices straight to users and configures them over the internet.",
      "Verify downloads with a published hash before you trust them.",
      "Package managers (winget, apt, dnf) install and update software repeatably.",
      "Test images and major updates in a VM with a snapshot first, and keep a record of every licence."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What is the main purpose of comparing a SHA-256 hash after downloading an ISO?",
       "options": [
        "To speed up installation",
        "To confirm the file is genuine and not corrupted",
        "To activate the licence key that is embedded inside the installer image",
        "To compress the file"
       ],
       "answer": 1,
       "explain": "A matching hash proves integrity. It does not install, activate or compress anything."
      },
      {
       "q": "Which command upgrades all packages managed by winget on Windows?",
       "options": [
        "apt upgrade",
        "winget list",
        "winget upgrade --all",
        "sfc /scannow"
       ],
       "answer": 2,
       "explain": "winget upgrade --all updates all apps it manages. apt is Linux, winget list only lists and sfc repairs system files."
      },
      {
       "q": "Which deployment method gives the most consistent results across 100 laptops?",
       "options": [
        "A tested standard image or automated provisioning",
        "Manual installs by different technicians",
        "In-place upgrades of whatever operating system each laptop already has installed",
        "Letting users install their own apps"
       ],
       "answer": 0,
       "explain": "Automation from one tested definition produces identical builds. Manual and user-driven methods drift."
      },
      {
       "q": "Why test a major update in a virtual machine with a snapshot first?",
       "options": [
        "You can test safely and roll back instantly if it breaks",
        "VMs never need updates",
        "Updates are smaller in VMs",
        "It removes the need for backups because the snapshot keeps every version"
       ],
       "answer": 0,
       "explain": "Snapshots allow instant rollback during testing. VMs still need updates and backups still matter."
      },
      {
       "q": "A tool is labelled 'free for personal use'. What is the risk of installing it on company PCs?",
       "options": [
        "It may breach the licence for business use",
        "None, free means free",
        "It will not run on business editions of Windows or macOS at all",
        "It deletes other licences"
       ],
       "answer": 0,
       "explain": "Personal-use licences typically exclude commercial use, creating legal risk."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m3",
 "order": 3,
 "code": "Connect",
 "title": "Networking Fundamentals",
 "subtitle": "TCP/IP, addressing, DNS, DHCP, Wi-Fi and the tools that prove where a network fault lives",
 "outcomes": [
  "Explain how data moves across networks using the OSI and TCP/IP models, TCP, UDP and ports",
  "Calculate IPv4 subnets and recognise private, APIPA and IPv6 addresses",
  "Explain and troubleshoot DNS and DHCP",
  "Set up and secure small office Wi-Fi and routers",
  "Use command-line tools and a layered method to locate network faults"
 ],
 "lessons": [
  {
   "id": "m3-l1",
   "title": "How Networks Work: Models, TCP/IP and Ports",
   "subtitle": "Devices, layers, protocols and the port numbers you will see every day",
   "minutes": 26,
   "objectives": [
    "Identify common network devices and network types",
    "Use the OSI and TCP/IP models to describe where a problem lives",
    "Compare TCP and UDP and recognise well-known port numbers",
    "Explain encapsulation in simple terms"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Almost every support ticket touches the network: email, cloud apps, printers, file shares and phones all depend on it. You do not need to be a network engineer, but you must understand how data gets from a laptop to a server and back, so you can tell whether a problem is the user's device, the local network, the internet link or the remote service."
    },
    {
     "type": "table",
     "head": [
      "Device",
      "Works at",
      "Job"
     ],
     "rows": [
      [
       "Switch",
       "Layer 2",
       "Connects devices in a LAN and forwards frames by MAC address"
      ],
      [
       "Router",
       "Layer 3",
       "Moves packets between networks using IP addresses; the default gateway"
      ],
      [
       "Wireless access point",
       "Layer 2",
       "Connects Wi-Fi clients to the wired LAN"
      ],
      [
       "Firewall",
       "Layers 3-7",
       "Allows or blocks traffic according to rules"
      ],
      [
       "Modem / ONT",
       "Layer 1-2",
       "Connects to the provider's DSL, cable or fibre line"
      ],
      [
       "SOHO router",
       "Several",
       "Router, switch, Wi-Fi, firewall, DHCP and NAT in one box"
      ]
     ],
     "title": "Network devices and what they do"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "LAN",
       "items": [
        "One building or floor",
        "High speed, owned by the organisation",
        "Ethernet and Wi-Fi"
       ]
      },
      {
       "title": "WAN",
       "items": [
        "Connects distant sites",
        "Provider links, VPNs or SD-WAN",
        "Slower and costlier than a LAN"
       ]
      },
      {
       "title": "Internet and cloud",
       "items": [
        "Public networks reaching SaaS and cloud",
        "Reached through a firewall and NAT",
        "Performance depends on the provider"
       ]
      }
     ],
     "title": "Network types"
    },
    {
     "type": "layers",
     "items": [
      {
       "label": "7 Application",
       "parts": [
        "HTTP, DNS, SMTP",
        "'The website shows an error'"
       ]
      },
      {
       "label": "6 Presentation",
       "parts": [
        "Encoding, encryption (TLS)",
        "'Certificate warning'"
       ]
      },
      {
       "label": "5 Session",
       "parts": [
        "Opening and keeping sessions",
        "'I keep getting logged out of the app'"
       ]
      },
      {
       "label": "4 Transport",
       "parts": [
        "TCP and UDP ports",
        "'Port 443 is blocked'"
       ]
      },
      {
       "label": "3 Network",
       "parts": [
        "IP addressing and routing",
        "'Wrong gateway' or 'no route'"
       ]
      },
      {
       "label": "2 Data link",
       "parts": [
        "MAC addresses, switches, Wi-Fi association",
        "'Port in the wrong VLAN'"
       ]
      },
      {
       "label": "1 Physical",
       "parts": [
        "Cables, signals, radio",
        "'Cable unplugged' or 'weak Wi-Fi signal'"
       ]
      }
     ],
     "title": "OSI model with support examples (top first)"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Day to day, engineers use the simpler four-layer TCP/IP model: **link, internet, transport, application**. The OSI numbers are still useful shorthand: 'a Layer 1 problem' means cables or radio, 'Layer 3' means addressing or routing.",
     "title": "The TCP/IP model is the practical one"
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Data",
       "text": "The mail app prepares the message."
      },
      {
       "label": "Segment",
       "text": "TCP adds ports and sequence numbers."
      },
      {
       "label": "Packet",
       "text": "IP adds source and destination addresses."
      },
      {
       "label": "Frame",
       "text": "Ethernet or Wi-Fi adds MAC addresses."
      },
      {
       "label": "Signal",
       "text": "The network card sends bits over cable or radio."
      }
     ],
     "title": "Encapsulation: sending an email"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "TCP",
       "items": [
        "Connection-oriented with a three-way handshake",
        "Reliable: retransmits lost data, keeps order",
        "Web, email, file transfer, remote desktop"
       ]
      },
      {
       "title": "UDP",
       "items": [
        "Connectionless, no handshake",
        "Fast, no retransmission",
        "DNS queries, voice and video calls, DHCP, streaming"
       ]
      }
     ],
     "title": "TCP versus UDP"
    },
    {
     "type": "packet",
     "title": "The UDP header: just 8 bytes",
     "width": 32,
     "fields": [
      {
       "label": "Source port",
       "bits": 16
      },
      {
       "label": "Destination port",
       "bits": 16
      },
      {
       "label": "Length",
       "bits": 16
      },
      {
       "label": "Checksum",
       "bits": 16
      }
     ],
     "caption": "UDP adds only ports, a length and a checksum: no sequence numbers and no acknowledgements. That is why it suits DNS and live calls, and why a lost UDP packet is simply gone."
    },
    {
     "type": "table",
     "head": [
      "Port",
      "Protocol",
      "Used for"
     ],
     "rows": [
      [
       "22",
       "TCP",
       "SSH and secure file transfer (SFTP)"
      ],
      [
       "25 / 587",
       "TCP",
       "SMTP mail relay / mail submission"
      ],
      [
       "53",
       "UDP and TCP",
       "DNS"
      ],
      [
       "67 / 68",
       "UDP",
       "DHCP server / client"
      ],
      [
       "123",
       "UDP",
       "NTP time synchronisation"
      ],
      [
       "80 / 443",
       "TCP (443 also UDP for QUIC)",
       "HTTP / HTTPS"
      ],
      [
       "445",
       "TCP",
       "SMB file sharing"
      ],
      [
       "3389",
       "TCP",
       "Remote Desktop"
      ],
      [
       "993",
       "TCP",
       "IMAP over TLS"
      ]
     ],
     "title": "Ports every support specialist should know"
    },
    {
     "type": "sequence",
     "title": "What happens when a user opens a secure website",
     "actors": [
      "Laptop",
      "DNS resolver",
      "Web server"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Query: www.example.com (UDP 53)"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Answer: 203.0.113.10",
       "reply": true
      },
      {
       "from": 0,
       "to": 2,
       "label": "TCP SYN to port 443"
      },
      {
       "from": 2,
       "to": 0,
       "label": "SYN-ACK",
       "reply": true
      },
      {
       "from": 0,
       "to": 2,
       "label": "ACK: connection open"
      },
      {
       "from": 0,
       "to": 2,
       "label": "TLS ClientHello"
      },
      {
       "from": 2,
       "to": 0,
       "label": "ServerHello + certificate",
       "reply": true
      },
      {
       "from": 0,
       "to": 2,
       "label": "HTTP GET / (encrypted)"
      },
      {
       "from": 2,
       "to": 0,
       "label": "200 OK + page (encrypted)",
       "reply": true
      }
     ],
     "caption": "One click uses name resolution over UDP, a TCP handshake and then TLS before any web content moves; each is a separate place a fault can hide. Browsers using HTTP/3 replace the TCP step with QUIC over UDP 443."
    },
    {
     "type": "scenario",
     "situation": "Staff at a Khulna NGO office can browse websites normally, but every video call drops after a few seconds with poor audio. A new firewall was installed last week.",
     "options": [
      {
       "text": "Replace all the network cables",
       "feedback": "Browsing works fine, so the physical layer is healthy.",
       "best": false
      },
      {
       "text": "Reinstall the video call app on every PC",
       "feedback": "All users are affected at once, which points to a shared network element, not the apps.",
       "best": false
      },
      {
       "text": "Check whether the new firewall is blocking or throttling the UDP ports the calling service needs",
       "feedback": "Correct. Calls depend heavily on UDP, while web browsing uses mostly TCP 443. A recent firewall change is the obvious suspect.",
       "best": true
      },
      {
       "text": "Increase the DHCP lease time",
       "feedback": "Addressing works, as browsing shows.",
       "best": false
      }
     ],
     "title": "Website loads, video calls fail"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "LAN",
       "def": "Local area network: a network covering a limited area such as an office, owned and managed by the organisation."
      },
      {
       "term": "Router",
       "def": "A Layer 3 device that forwards packets between different IP networks."
      },
      {
       "term": "Switch",
       "def": "A Layer 2 device that connects devices in a LAN and forwards frames using MAC addresses."
      },
      {
       "term": "OSI model",
       "def": "A seven-layer reference model that describes network functions from physical signals to applications."
      },
      {
       "term": "TCP",
       "def": "Transmission Control Protocol: connection-oriented, reliable transport that resends lost data."
      },
      {
       "term": "UDP",
       "def": "User Datagram Protocol: connectionless, low-overhead transport used for DNS, voice and video."
      },
      {
       "term": "Port number",
       "def": "A number that identifies a specific service or application on a host, such as 443 for HTTPS."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Switches forward frames by MAC address inside a LAN; routers forward packets between networks by IP.",
      "Use OSI numbers as shorthand: Layer 1 is cables and radio, Layer 3 is addressing and routing.",
      "Data is wrapped layer by layer: segment (ports), packet (IP), frame (MAC), signal.",
      "TCP is reliable and ordered; UDP is fast and suits DNS, DHCP and live calls.",
      "Know the everyday ports: 22, 53, 67/68, 123, 443, 445 and 3389."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which device should be checked first if a whole office can reach each other's PCs but not the internet?",
       "options": [
        "Each user's network card and its driver, one PC at a time across the office",
        "The router or firewall acting as the default gateway",
        "The printers",
        "The keyboard cables"
       ],
       "answer": 1,
       "explain": "Local traffic works, so the LAN is fine; the path out through the gateway or internet link is suspect."
      },
      {
       "q": "Which port must be reachable for users to connect with Remote Desktop?",
       "options": [
        "22",
        "3389",
        "443",
        "53"
       ],
       "answer": 1,
       "explain": "Remote Desktop uses TCP 3389. 22 is SSH, 443 HTTPS and 53 DNS."
      },
      {
       "q": "A user sees a certificate warning on a website. Roughly which OSI layer is involved?",
       "options": [
        "Layer 1",
        "Layer 2",
        "Layer 6 / application layer security",
        "Layer 3"
       ],
       "answer": 2,
       "explain": "TLS and certificates are usually placed at the presentation layer, near the application. Lower layers deal with cables, frames and addressing."
      },
      {
       "q": "Why do voice and video calls usually use UDP?",
       "options": [
        "UDP guarantees delivery",
        "UDP encrypts voice traffic by default, while TCP sends it in clear text",
        "Late, resent audio is useless, so low delay matters more",
        "TCP cannot carry audio"
       ],
       "answer": 2,
       "explain": "Real-time media prefers speed; retransmitting old audio does not help. UDP itself has no encryption or delivery guarantee."
      },
      {
       "q": "What is added to data at the transport layer?",
       "options": [
        "Port numbers",
        "MAC addresses",
        "IP addresses",
        "Radio signals"
       ],
       "answer": 0,
       "explain": "TCP or UDP headers add ports. IP adds addresses at Layer 3 and MACs at Layer 2."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l2",
   "title": "IP Addressing and Subnetting",
   "subtitle": "IPv4, masks, gateways, private ranges and a first look at IPv6",
   "minutes": 32,
   "objectives": [
    "Read an IPv4 address with its subnet mask or CIDR prefix",
    "Calculate network, broadcast and usable host range for common prefixes",
    "Recognise private, loopback and APIPA addresses and what they mean in a ticket",
    "Read basic IPv6 addresses"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Every device on a network needs an IP address, a subnet mask and a default gateway to talk beyond its own segment, plus DNS servers to find names. Most tickets about 'no internet' are solved by checking these four values. Subnetting tells you which addresses are local and which must go through the router."
    },
    {
     "type": "table",
     "head": [
      "Setting",
      "Example",
      "What it does"
     ],
     "rows": [
      [
       "IP address",
       "192.168.10.25",
       "Identifies this host on the network"
      ],
      [
       "Subnet mask / prefix",
       "255.255.255.0 or /24",
       "Splits the address into network and host parts"
      ],
      [
       "Default gateway",
       "192.168.10.1",
       "Router used for anything outside the local subnet"
      ],
      [
       "DNS server",
       "192.168.10.10",
       "Translates names into IP addresses"
      ]
     ],
     "title": "The four settings every host needs"
    },
    {
     "type": "table",
     "head": [
      "Range",
      "Meaning",
      "What it tells you in a ticket"
     ],
     "rows": [
      [
       "10.0.0.0/8",
       "Private",
       "Normal inside organisations"
      ],
      [
       "172.16.0.0/12",
       "Private",
       "Normal inside organisations"
      ],
      [
       "192.168.0.0/16",
       "Private",
       "Typical home and small office"
      ],
      [
       "127.0.0.0/8",
       "Loopback",
       "The host talking to itself"
      ],
      [
       "169.254.0.0/16",
       "APIPA / link-local",
       "The host asked for DHCP and got no answer"
      ],
      [
       "100.64.0.0/10",
       "Carrier-grade NAT",
       "Provider is sharing public addresses"
      ]
     ],
     "title": "Special IPv4 ranges"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Addresses in a subnet",
       "expr": "addresses = 2^(32 - prefix)",
       "meaning": "A /24 has 2^8 = 256 addresses; a /26 has 2^6 = 64."
      },
      {
       "name": "Usable hosts",
       "expr": "hosts = 2^(32 - prefix) - 2",
       "meaning": "Subtract the network and broadcast addresses: a /26 gives 62 usable hosts."
      },
      {
       "name": "Block size",
       "expr": "block = 256 - last non-255 mask octet",
       "meaning": "Mask 255.255.255.192 gives block 64, so subnets start at .0, .64, .128, .192."
      }
     ],
     "title": "Subnet maths"
    },
    {
     "type": "table",
     "head": [
      "Prefix",
      "Mask",
      "Addresses",
      "Usable hosts"
     ],
     "rows": [
      [
       "/24",
       "255.255.255.0",
       "256",
       "254"
      ],
      [
       "/25",
       "255.255.255.128",
       "128",
       "126"
      ],
      [
       "/26",
       "255.255.255.192",
       "64",
       "62"
      ],
      [
       "/27",
       "255.255.255.224",
       "32",
       "30"
      ],
      [
       "/28",
       "255.255.255.240",
       "16",
       "14"
      ],
      [
       "/30",
       "255.255.255.252",
       "4",
       "2"
      ]
     ],
     "title": "Common prefixes"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Find the block size",
       "text": "/26 means mask 255.255.255.192, so the block is 256 - 192 = 64."
      },
      {
       "title": "Find the subnet",
       "text": "Multiples of 64 are 0, 64, 128, 192. 77 falls in the block starting at 64, so the network is 192.168.10.64."
      },
      {
       "title": "Find the broadcast",
       "text": "The next block starts at 128, so the broadcast is 192.168.10.127."
      },
      {
       "title": "Usable range",
       "text": "192.168.10.65 to 192.168.10.126, which is 62 hosts."
      },
      {
       "title": "Check the gateway",
       "text": "A gateway of 192.168.10.1 would be outside this subnet, so this host could not reach it."
      }
     ],
     "title": "Worked example: 192.168.10.77/26"
    },
    {
     "type": "tool",
     "tool": "subnet",
     "title": "Practise with the subnet calculator",
     "prompt": "Enter 192.168.10.77/26 and confirm the network (.64), broadcast (.127) and 62 usable hosts. Then try 10.20.5.200/27 and 172.16.40.9/28 and work out the range on paper before checking."
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A new receptionist's PC at a Chattogram hotel could print locally but not reach the booking website. Its static settings were 192.168.20.45/24 with gateway 192.168.2.1, a typing error. Correcting the gateway to 192.168.20.1 fixed it instantly. Local traffic worked because it never needed the router.",
     "title": "The wrong gateway"
    },
    {
     "type": "topology",
     "title": "Two subnets joined by a router",
     "nodes": [
      {
       "id": "inet",
       "kind": "internet",
       "label": "Internet",
       "x": 3,
       "y": 0
      },
      {
       "id": "rtr",
       "kind": "router",
       "label": "Office router",
       "sub": "default gateway for both",
       "x": 3,
       "y": 2
      },
      {
       "id": "swa",
       "kind": "switch",
       "label": "Switch A",
       "sub": "192.168.10.0/24",
       "x": 1,
       "y": 3
      },
      {
       "id": "swb",
       "kind": "switch",
       "label": "Switch B",
       "sub": "192.168.20.0/24",
       "x": 5,
       "y": 3
      },
      {
       "id": "pc1",
       "kind": "host",
       "label": "Accounts PC",
       "sub": "192.168.10.25",
       "x": 0,
       "y": 5
      },
      {
       "id": "prn",
       "kind": "host",
       "label": "Printer",
       "sub": "192.168.10.50",
       "x": 2,
       "y": 5
      },
      {
       "id": "pc2",
       "kind": "host",
       "label": "Reception PC",
       "sub": "192.168.20.45",
       "x": 4,
       "y": 5
      },
      {
       "id": "srv",
       "kind": "server",
       "label": "Booking server",
       "sub": "192.168.20.10",
       "x": 6,
       "y": 5
      }
     ],
     "links": [
      {
       "a": "inet",
       "b": "rtr",
       "label": "public IP"
      },
      {
       "a": "rtr",
       "b": "swa",
       "label": "gw 192.168.10.1"
      },
      {
       "a": "rtr",
       "b": "swb",
       "label": "gw 192.168.20.1"
      },
      {
       "a": "swa",
       "b": "pc1"
      },
      {
       "a": "swa",
       "b": "prn"
      },
      {
       "a": "swb",
       "b": "pc2"
      },
      {
       "a": "swb",
       "b": "srv"
      }
     ],
     "caption": "Hosts reach anything in their own subnet directly, but everything else goes to the gateway, which must sit inside that same subnet. The receptionist's mistyped gateway, 192.168.2.1, exists in neither subnet, so only local traffic worked."
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "ipconfig /all",
      "Get-NetIPConfiguration",
      "# Linux:",
      "# ip -br addr",
      "# ip route show default",
      "# macOS:",
      "# ifconfig en0 | grep 'inet '"
     ],
     "title": "Checking IP settings"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "IPv4",
       "items": [
        "32-bit, dotted decimal: 192.168.1.10",
        "About 4.3 billion addresses; relies on NAT",
        "DHCP for automatic addressing"
       ]
      },
      {
       "title": "IPv6",
       "items": [
        "128-bit, hexadecimal: 2001:db8:10::25",
        "Huge address space; no NAT needed",
        "SLAAC or DHCPv6; fe80:: link-local always present"
       ]
      }
     ],
     "title": "IPv4 and IPv6"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Leading zeros in each group can be dropped, and one run of all-zero groups can be replaced by `::`. So 2001:0db8:0000:0000:0000:0000:0000:0025 becomes **2001:db8::25**.",
     "title": "Shortening IPv6 addresses"
    },
    {
     "type": "scenario",
     "situation": "A user in a Dhaka garment factory office says 'no internet'. `ipconfig` shows IPv4 address 169.254.33.18 with no default gateway. Other PCs on the same switch work.",
     "options": [
      {
       "text": "Set a static address of 169.254.33.1 as the gateway",
       "feedback": "169.254 addresses are self-assigned; there is no router at that address.",
       "best": false
      },
      {
       "text": "Check the cable and switch port, then release and renew the DHCP lease",
       "feedback": "Correct. APIPA means the PC never heard back from DHCP. A physical or port issue on this one PC, or a DHCP failure, are the likely causes; renewing tests the fix.",
       "best": true
      },
      {
       "text": "Reinstall the web browser",
       "feedback": "The PC has no valid IP configuration; the browser is not the issue.",
       "best": false
      },
      {
       "text": "Change the DNS server to a public resolver",
       "feedback": "Without a valid address and gateway, DNS changes cannot help.",
       "best": false
      }
     ],
     "title": "A 169.254 address"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "IP address",
       "def": "A logical address that identifies a host interface on an IP network."
      },
      {
       "term": "Subnet mask",
       "def": "A value that separates the network part of an IPv4 address from the host part, such as 255.255.255.0."
      },
      {
       "term": "CIDR prefix",
       "def": "Notation such as /24 that states how many leading bits form the network portion of an address."
      },
      {
       "term": "Default gateway",
       "def": "The router address a host uses to reach destinations outside its local subnet."
      },
      {
       "term": "Broadcast address",
       "def": "The last address in an IPv4 subnet, used to reach every host on that subnet."
      },
      {
       "term": "APIPA",
       "def": "Automatic Private IP Addressing: a 169.254.x.x address a host gives itself when DHCP does not respond."
      },
      {
       "term": "IPv6",
       "def": "The 128-bit successor to IPv4 with a vastly larger address space, written in hexadecimal."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Check four values on every 'no internet' ticket: IP address, mask, gateway and DNS.",
      "Addresses = 2^(32 - prefix); usable hosts = that number minus 2.",
      "Use the block size (256 minus the mask octet) to find network and broadcast addresses fast.",
      "169.254.x.x means DHCP never answered; 127.x is loopback.",
      "IPv6 is 128-bit hexadecimal; every interface also has an fe80:: link-local address."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "How many usable host addresses are in a /27 subnet?",
       "options": [
        "32",
        "62",
        "30",
        "14"
       ],
       "answer": 2,
       "explain": "2^5 = 32 addresses minus network and broadcast gives 30."
      },
      {
       "q": "What is the network address of 10.1.1.200/26?",
       "options": [
        "10.1.1.192",
        "10.1.1.128",
        "10.1.1.200",
        "10.1.1.0"
       ],
       "answer": 0,
       "explain": "Block size 64: 0, 64, 128, 192. 200 falls in the block starting at 192."
      },
      {
       "q": "A PC has address 169.254.10.5. What does this most likely mean?",
       "options": [
        "It could not obtain an address from DHCP",
        "It has a public address",
        "It is using IPv6",
        "It is a loopback address that the PC uses to talk to itself"
       ],
       "answer": 0,
       "explain": "169.254.x.x is APIPA, used when DHCP fails."
      },
      {
       "q": "Which is the correct compressed form of 2001:0db8:0000:0000:0000:0000:0000:0001?",
       "options": [
        "2001:db8::1",
        "2001:db8:0:1",
        "2001::db8::1",
        "21:db8::1"
       ],
       "answer": 0,
       "explain": "Drop leading zeros and replace the single run of zero groups with ::. '::' can appear only once."
      },
      {
       "q": "Host 192.168.5.20/24 has gateway 192.168.6.1. What will happen?",
       "options": [
        "Local traffic works; traffic to other networks fails",
        "Everything works",
        "No traffic works at all, because the mask and gateway conflict completely",
        "Only DNS works"
       ],
       "answer": 0,
       "explain": "The gateway is outside the host's subnet, so the host cannot reach it; same-subnet traffic still works."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l3",
   "title": "DNS and DHCP",
   "subtitle": "The two services behind most 'the network is down' tickets",
   "minutes": 28,
   "objectives": [
    "Explain how DNS resolves a name and identify common record types",
    "Describe the DHCP DORA process, scopes, leases and reservations",
    "Use command-line tools to test and clear DNS and renew DHCP leases",
    "Diagnose typical DNS and DHCP failures"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "People remember names, computers use addresses. **DNS** translates names such as `intranet.company.local` into IP addresses. **DHCP** hands out IP settings automatically. When either fails, users see 'the internet is down' even though cables, switches and routers are fine. That makes these two services the most valuable to understand deeply."
    },
    {
     "type": "sequence",
     "title": "How a name is resolved",
     "actors": [
      "Laptop",
      "Resolver",
      "Root server",
      ".com TLD",
      "Authoritative"
     ],
     "steps": [
      {
       "from": 0,
       "to": 0,
       "label": "Check cache and hosts file"
      },
      {
       "from": 0,
       "to": 1,
       "label": "www.example.com?"
      },
      {
       "from": 1,
       "to": 2,
       "label": "www.example.com?",
       "note": "only if not cached"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Ask the .com servers",
       "reply": true
      },
      {
       "from": 1,
       "to": 3,
       "label": "www.example.com?"
      },
      {
       "from": 3,
       "to": 1,
       "label": "Ask example.com's name servers",
       "reply": true
      },
      {
       "from": 1,
       "to": 4,
       "label": "www.example.com?"
      },
      {
       "from": 4,
       "to": 1,
       "label": "A 203.0.113.10, TTL 3600",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "203.0.113.10",
       "reply": true,
       "note": "resolver caches it for the TTL"
      }
     ],
     "caption": "The laptop asks one question and gets one answer; the resolver does the walking. Caching at every step is why a changed record can take up to one TTL to be seen everywhere."
    },
    {
     "type": "table",
     "head": [
      "Record",
      "Purpose",
      "Example"
     ],
     "rows": [
      [
       "A",
       "Name to IPv4 address",
       "www -> 203.0.113.10"
      ],
      [
       "AAAA",
       "Name to IPv6 address",
       "www -> 2001:db8::10"
      ],
      [
       "CNAME",
       "Alias to another name",
       "mail -> mail.provider.example"
      ],
      [
       "MX",
       "Mail servers for a domain",
       "company.com -> mx1.provider.example"
      ],
      [
       "TXT",
       "Text, used for SPF, DKIM and domain verification",
       "v=spf1 include:..."
      ],
      [
       "PTR",
       "Reverse: address to name",
       "203.0.113.10 -> www.company.com"
      ],
      [
       "NS",
       "Authoritative name servers",
       "company.com -> ns1.host.example"
      ]
     ],
     "title": "DNS record types"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "Resolve-DnsName intranet.company.local",
      "Resolve-DnsName company.com -Type MX",
      "nslookup www.example.com 1.1.1.1      # ask a specific server",
      "ipconfig /displaydns | Select-String example",
      "ipconfig /flushdns                    # clear stale cache entries"
     ],
     "title": "Testing DNS"
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "dig www.example.com +short",
      "dig company.com MX",
      "dig @9.9.9.9 www.example.com          # query a specific resolver",
      "resolvectl status                     # which DNS servers are in use (systemd)",
      "# macOS: scutil --dns | head -n 20"
     ],
     "title": "Testing DNS on Linux and macOS"
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "Each DNS answer carries a TTL in seconds telling resolvers how long to cache it. A long TTL means changes take longer to reach everyone. Before a planned server move, lower the TTL a day ahead.",
     "title": "TTL (time to live)"
    },
    {
     "type": "sequence",
     "title": "DHCP: the DORA exchange",
     "actors": [
      "New laptop",
      "DHCP server"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "DHCPDISCOVER (broadcast)",
       "note": "from 0.0.0.0 to 255.255.255.255"
      },
      {
       "from": 1,
       "to": 0,
       "label": "DHCPOFFER: 192.168.10.120",
       "reply": true,
       "note": "plus mask, gateway, DNS, lease"
      },
      {
       "from": 0,
       "to": 1,
       "label": "DHCPREQUEST: I accept .120",
       "note": "broadcast so other servers know"
      },
      {
       "from": 1,
       "to": 0,
       "label": "DHCPACK: lease starts",
       "reply": true
      },
      {
       "from": 0,
       "to": 0,
       "label": "Configures IP; renews at 50% of lease"
      }
     ],
     "caption": "Discover and Request are broadcasts because the client has no address yet, which is why routers need a DHCP relay to serve other subnets. If no Offer arrives, the client falls back to a 169.254 address."
    },
    {
     "type": "table",
     "head": [
      "Item",
      "Meaning",
      "Example"
     ],
     "rows": [
      [
       "Scope",
       "The pool of addresses offered on a subnet",
       "192.168.10.100-192.168.10.199"
      ],
      [
       "Exclusion",
       "Addresses inside the range the server must not give out",
       "Printers' static block"
      ],
      [
       "Reservation",
       "A fixed address always given to one MAC address",
       "Label printer always gets .50"
      ],
      [
       "Lease",
       "How long a client may use the address",
       "8 hours for guests, 8 days for staff"
      ],
      [
       "Options",
       "Extra settings handed out",
       "Gateway, DNS servers, domain name"
      ],
      [
       "Relay",
       "Forwards DHCP requests from other subnets to the server",
       "Router relays VLAN 20 to the server"
      ]
     ],
     "title": "DHCP terms in practice"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "ipconfig /release",
      "ipconfig /renew",
      "ipconfig /all | Select-String 'DHCP Server|Lease'",
      "# Linux (NetworkManager): nmcli connection down 'Wired 1'; nmcli connection up 'Wired 1'",
      "# macOS: sudo ipconfig set en0 DHCP"
     ],
     "title": "Renewing a DHCP lease"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "If a scope runs out of addresses, new devices get APIPA addresses and cannot connect. Guest Wi-Fi with long leases is a common cause. Shorten guest leases, enlarge the scope or split the network.",
     "title": "Scope exhaustion"
    },
    {
     "type": "scenario",
     "situation": "After an office move in Sylhet, users can reach `142.250.x.x` addresses by IP but no websites load by name. `ipconfig /all` shows DNS server 192.168.1.10, the old office's server, which no longer exists.",
     "options": [
      {
       "text": "Fix the DNS server option in the new DHCP scope and have clients renew their leases",
       "feedback": "Correct. The scope is still handing out the old DNS server. Fixing the option at the source fixes every client.",
       "best": true
      },
      {
       "text": "Replace the users' network cards",
       "feedback": "IP connectivity works, so hardware is fine.",
       "best": false
      },
      {
       "text": "Add hosts-file entries on each PC for popular sites",
       "feedback": "This is unmanageable and breaks as soon as addresses change.",
       "best": false
      },
      {
       "text": "Reboot the internet router",
       "feedback": "The router is passing traffic; the wrong DNS setting is the fault.",
       "best": false
      }
     ],
     "title": "Only names fail"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "DNS",
       "def": "Domain Name System: the distributed service that translates names into IP addresses and other records."
      },
      {
       "term": "A record",
       "def": "A DNS record that maps a hostname to an IPv4 address."
      },
      {
       "term": "MX record",
       "def": "A DNS record that names the mail servers responsible for a domain."
      },
      {
       "term": "TTL",
       "def": "Time to live: how long, in seconds, a DNS answer may be cached."
      },
      {
       "term": "DHCP",
       "def": "Dynamic Host Configuration Protocol: automatically assigns IP addresses and network settings to clients."
      },
      {
       "term": "DHCP reservation",
       "def": "A setting that always gives the same IP address to a specific device, identified by its MAC address."
      },
      {
       "term": "DHCP relay",
       "def": "A function on a router that forwards DHCP broadcasts from one subnet to a DHCP server on another."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "If IP addresses work but names fail, suspect DNS first.",
      "A, AAAA, CNAME, MX, TXT, PTR and NS records each answer a different question.",
      "TTL controls caching: lower it before a planned change and flush client caches after.",
      "DHCP follows Discover, Offer, Request, Acknowledge; reservations keep printers on fixed addresses.",
      "Fix wrong settings at the DHCP scope so every client gets the correction at renewal."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What is the correct order of the DHCP exchange?",
       "options": [
        "Request, Offer, Discover, Acknowledge",
        "Offer, Discover, Acknowledge, Request",
        "Discover, Request, Offer, Acknowledge",
        "Discover, Offer, Request, Acknowledge"
       ],
       "answer": 3,
       "explain": "DORA: Discover, Offer, Request, Acknowledge."
      },
      {
       "q": "Which record tells other mail servers where to deliver email for a domain?",
       "options": [
        "A",
        "MX",
        "CNAME",
        "PTR"
       ],
       "answer": 1,
       "explain": "MX lists mail servers. A maps names to IPv4, CNAME is an alias and PTR is reverse lookup."
      },
      {
       "q": "A user can open a site by IP address but not by name. What is the most likely fault area?",
       "options": [
        "Cabling",
        "DNS",
        "DHCP lease time",
        "Printer driver"
       ],
       "answer": 1,
       "explain": "IP connectivity works, so name resolution is the problem."
      },
      {
       "q": "A network printer keeps changing address and users lose it. What is the best fix?",
       "options": [
        "Create a DHCP reservation for the printer's MAC address",
        "Shorten the lease time so the printer renews its address more often",
        "Turn off DHCP",
        "Use APIPA"
       ],
       "answer": 0,
       "explain": "A reservation keeps the address constant while still managed centrally."
      },
      {
       "q": "After moving a website to a new server, some users still reach the old one. What explains this?",
       "options": [
        "DHCP leases",
        "A wrong subnet mask on the clients that still reach the old server",
        "MX record errors",
        "Cached DNS answers that have not reached their TTL expiry"
       ],
       "answer": 3,
       "explain": "Resolvers keep cached answers until the TTL expires; flushing caches or waiting resolves it."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l4",
   "title": "Wi-Fi and Small Office Networks",
   "subtitle": "Standards, bands, security and setting up a small office or home office",
   "minutes": 26,
   "objectives": [
    "Compare Wi-Fi standards, bands and channel choices",
    "Configure secure Wi-Fi with WPA3 and separate guest access",
    "Explain NAT and port forwarding on a small office router",
    "Troubleshoot weak signal, interference and roaming problems"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Wi-Fi is how most people connect in 2026, and it is the network they complain about most. Radio is shared, invisible and affected by walls, crowds and neighbours. A support specialist who understands bands, channels and security can fix many 'slow internet' tickets without touching the internet link."
    },
    {
     "type": "table",
     "head": [
      "Name",
      "Standard",
      "Bands",
      "Notes"
     ],
     "rows": [
      [
       "Wi-Fi 4",
       "802.11n",
       "2.4 and 5 GHz",
       "Older devices; still common in printers and IoT"
      ],
      [
       "Wi-Fi 5",
       "802.11ac",
       "5 GHz",
       "Widely deployed in offices"
      ],
      [
       "Wi-Fi 6 / 6E",
       "802.11ax",
       "2.4, 5 and 6 GHz (6E)",
       "Better in crowded spaces; 6E adds clean 6 GHz channels and requires WPA3 there"
      ],
      [
       "Wi-Fi 7",
       "802.11be",
       "2.4, 5 and 6 GHz",
       "Up to 320 MHz channels in 6 GHz and multi-link operation (MLO) across bands"
      ],
      [
       "Wi-Fi 8 (in development)",
       "802.11bn",
       "2.4, 5 and 6 GHz",
       "Aims at reliability rather than peak speed; not yet a purchasing factor"
      ]
     ],
     "title": "Wi-Fi generations"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "2.4 GHz",
       "items": [
        "Longest range, passes walls better",
        "Only three non-overlapping channels: 1, 6, 11",
        "Crowded with neighbours, Bluetooth and microwaves"
       ]
      },
      {
       "title": "5 GHz",
       "items": [
        "Many more channels, faster",
        "Shorter range",
        "Best default for laptops and phones"
       ]
      },
      {
       "title": "6 GHz",
       "items": [
        "Very clean spectrum, widest channels",
        "Shortest range; needs Wi-Fi 6E or 7 devices",
        "Requires WPA3"
       ]
      }
     ],
     "title": "Choosing a band"
    },
    {
     "type": "table",
     "head": [
      "Option",
      "Status in 2026",
      "Use"
     ],
     "rows": [
      [
       "Open",
       "No encryption",
       "Avoid; use a captive portal with enhanced open if guests need easy access"
      ],
      [
       "WEP / WPA (TKIP)",
       "Broken",
       "Never use"
      ],
      [
       "WPA2-Personal (AES)",
       "Acceptable",
       "Legacy devices that cannot do WPA3"
      ],
      [
       "WPA3-Personal (SAE)",
       "Recommended",
       "Small offices with a strong passphrase"
      ],
      [
       "WPA2/WPA3-Enterprise (802.1X)",
       "Best for organisations",
       "Each user signs in with their own credentials or certificate"
      ]
     ],
     "title": "Wi-Fi security options"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Put guests on their own SSID and network segment that can reach only the internet. A visitor's infected laptop should never be able to see your file server or printers.",
     "title": "Separate guests from staff"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Change the admin credentials",
       "text": "Replace the default admin password and disable remote admin from the internet."
      },
      {
       "title": "Update the firmware",
       "text": "Install the latest firmware and turn on automatic updates if available."
      },
      {
       "title": "Configure Wi-Fi",
       "text": "WPA3 (or WPA2/WPA3 mixed), a long passphrase and a neutral SSID that does not reveal the company name."
      },
      {
       "title": "Create guest Wi-Fi",
       "text": "Isolated from the internal LAN, with a separate passphrase changed regularly."
      },
      {
       "title": "Set DHCP and DNS",
       "text": "Size the scope for growth and reserve addresses for printers."
      },
      {
       "title": "Disable risky features",
       "text": "Turn off WPS and UPnP unless there is a specific need."
      },
      {
       "title": "Document",
       "text": "Record SSIDs, admin access method, firmware version and passphrase location in the password manager."
      }
     ],
     "title": "Setting up a small office router securely"
    },
    {
     "type": "topology",
     "title": "A secure small office network",
     "nodes": [
      {
       "id": "inet",
       "kind": "internet",
       "label": "Internet",
       "x": 3,
       "y": 0
      },
      {
       "id": "fw",
       "kind": "firewall",
       "label": "Office router",
       "sub": "firewall, NAT, DHCP",
       "x": 3,
       "y": 2
      },
      {
       "id": "sw",
       "kind": "switch",
       "label": "Switch",
       "sub": "staff LAN 192.168.1.0/24",
       "x": 1,
       "y": 3
      },
      {
       "id": "ap",
       "kind": "ap",
       "label": "Access point",
       "sub": "SSIDs: Staff, Guest",
       "x": 5,
       "y": 3
      },
      {
       "id": "nas",
       "kind": "storage",
       "label": "NAS",
       "sub": "192.168.1.10",
       "x": 0,
       "y": 5
      },
      {
       "id": "prn",
       "kind": "host",
       "label": "Printer",
       "sub": "reserved .50",
       "x": 2,
       "y": 5
      },
      {
       "id": "lap",
       "kind": "laptop",
       "label": "Staff laptop",
       "sub": "WPA3, 5/6 GHz",
       "x": 4,
       "y": 5
      },
      {
       "id": "gst",
       "kind": "phone",
       "label": "Guest phone",
       "sub": "internet only",
       "x": 6,
       "y": 5
      }
     ],
     "links": [
      {
       "a": "inet",
       "b": "fw",
       "label": "fibre WAN"
      },
      {
       "a": "fw",
       "b": "sw",
       "label": "LAN"
      },
      {
       "a": "fw",
       "b": "ap",
       "label": "staff + guest"
      },
      {
       "a": "sw",
       "b": "nas"
      },
      {
       "a": "sw",
       "b": "prn"
      },
      {
       "a": "ap",
       "b": "lap",
       "label": "Staff SSID",
       "style": "wireless"
      },
      {
       "a": "ap",
       "b": "gst",
       "label": "Guest SSID",
       "style": "wireless"
      }
     ],
     "zones": [
      {
       "label": "Staff network",
       "x": 0,
       "y": 3,
       "w": 5,
       "h": 3,
       "tone": "good"
      },
      {
       "label": "Guest",
       "x": 6,
       "y": 4,
       "w": 1,
       "h": 2,
       "tone": "warn"
      }
     ],
     "caption": "One router and one access point carry two separate networks. Staff devices share the LAN with the NAS and printer, while guests land in their own segment with a path to the internet only."
    },
    {
     "type": "sequence",
     "title": "NAT on a small office router",
     "actors": [
      "PC 192.168.1.25",
      "Office router (NAT)",
      "Website 198.51.100.20"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "From 192.168.1.25:51000 to :443"
      },
      {
       "from": 1,
       "to": 1,
       "label": "Rewrite source to 203.0.113.5:62001",
       "note": "entry saved in the NAT table"
      },
      {
       "from": 1,
       "to": 2,
       "label": "From 203.0.113.5:62001 to :443"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Reply to 203.0.113.5:62001",
       "reply": true
      },
      {
       "from": 1,
       "to": 1,
       "label": "Look up :62001 in the NAT table"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Deliver to 192.168.1.25:51000",
       "reply": true
      }
     ],
     "caption": "Many inside devices share one public address because the router tracks each conversation by port. Unsolicited inbound traffic has no table entry, which is why reaching an inside device needs port forwarding, and why that is risky."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Port forwarding exposes an internal device to the internet. Never forward Remote Desktop (3389) or camera admin pages directly. Use a VPN or a cloud-managed remote access service instead.",
     "title": "Port forwarding opens a door"
    },
    {
     "type": "keypoints",
     "items": [
      "Check signal strength (RSSI): above about -67 dBm is good for calls; below -75 dBm expect trouble.",
      "Move clients to 5 or 6 GHz where possible.",
      "On 2.4 GHz use only channels 1, 6 or 11 and avoid overlapping neighbours.",
      "Add access points rather than turning up power; louder APs do not make phones louder.",
      "Test wired speed at the same time to separate Wi-Fi from internet problems."
     ],
     "title": "Fixing 'slow Wi-Fi' tickets"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "netsh wlan show interfaces          # SSID, band, channel, signal %, rates",
      "netsh wlan show networks mode=bssid # nearby networks and channels",
      "# Linux (NetworkManager):",
      "# nmcli dev wifi list",
      "# macOS: hold Option and click the Wi-Fi icon for RSSI, channel and noise"
     ],
     "title": "Checking Wi-Fi from the command line"
    },
    {
     "type": "scenario",
     "situation": "In a Dhaka office, video calls drop in the large meeting room only. `netsh wlan show interfaces` shows signal 38%, channel 6 on 2.4 GHz. The nearest access point is two rooms away behind a concrete wall.",
     "options": [
      {
       "text": "Increase the access point's transmit power to maximum",
       "feedback": "Clients still transmit weakly back, and higher power causes interference elsewhere.",
       "best": false
      },
      {
       "text": "Change the SSID name",
       "feedback": "The name has no effect on signal or interference.",
       "best": false
      },
      {
       "text": "Ask users to switch off video",
       "feedback": "This hides the symptom and does not fix coverage.",
       "best": false
      },
      {
       "text": "Add an access point in or near the meeting room and steer clients to 5 GHz",
       "feedback": "Correct. Weak signal through concrete on a crowded band is the root cause; closer coverage and a cleaner band fix it.",
       "best": true
      }
     ],
     "title": "Meeting room calls keep dropping"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "SSID",
       "def": "Service set identifier: the network name broadcast by Wi-Fi access points."
      },
      {
       "term": "WPA3",
       "def": "The current Wi-Fi security standard, using SAE for stronger protection of passphrase-based networks."
      },
      {
       "term": "802.1X",
       "def": "A port and Wi-Fi authentication framework where each user or device signs in individually, usually via a RADIUS server."
      },
      {
       "term": "Channel",
       "def": "A specific frequency range within a Wi-Fi band; overlapping channels interfere with each other."
      },
      {
       "term": "RSSI",
       "def": "Received signal strength indicator, usually in dBm; values closer to zero mean a stronger signal."
      },
      {
       "term": "NAT",
       "def": "Network address translation: rewriting private source addresses to a public address so many devices share one connection."
      },
      {
       "term": "Port forwarding",
       "def": "A router rule that sends inbound traffic on a public port to a specific internal device."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Prefer 5 or 6 GHz for staff devices; on 2.4 GHz use only channels 1, 6 and 11.",
      "Use WPA3 (or 802.1X for organisations); WEP and TKIP are broken.",
      "Isolate guests on their own SSID and segment with internet-only access.",
      "Harden every small office router: new admin password, current firmware, WPS and UPnP off.",
      "Never port-forward RDP or camera pages; use a VPN or secure remote-access service."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which 2.4 GHz channels do not overlap?",
       "options": [
        "1, 2, 3",
        "3, 7, 13",
        "1, 6, 11",
        "6, 12, 18"
       ],
       "answer": 2,
       "explain": "Channels 1, 6 and 11 are the standard non-overlapping set in 2.4 GHz."
      },
      {
       "q": "Which Wi-Fi security option should a small office choose for staff today?",
       "options": [
        "WEP",
        "WPA3-Personal or enterprise 802.1X",
        "WPA-TKIP",
        "Open with a hidden SSID"
       ],
       "answer": 1,
       "explain": "WPA3 or 802.1X are current best practice. WEP and TKIP are broken and hiding an SSID is not security."
      },
      {
       "q": "A signal reading of -82 dBm is:",
       "options": [
        "Excellent",
        "Weak, likely to cause problems",
        "Good for calls",
        "Too strong"
       ],
       "answer": 1,
       "explain": "Values below about -75 dBm are weak. Closer to zero is stronger."
      },
      {
       "q": "A manager wants to reach an office CCTV recorder from home. What is the safest approach?",
       "options": [
        "Forward the recorder's web port to the internet so he can log in directly",
        "Disable the router firewall",
        "Use a VPN or a secure cloud remote-access service",
        "Use the default admin password"
       ],
       "answer": 2,
       "explain": "A VPN or secure service avoids exposing the recorder to the internet. The other options create serious risks."
      },
      {
       "q": "Why should guest Wi-Fi be isolated from the internal LAN?",
       "options": [
        "So guest devices cannot reach internal servers and devices",
        "To make it faster",
        "Because guests use IPv6",
        "To save DHCP addresses and give staff devices more of the wireless bandwidth"
       ],
       "answer": 0,
       "explain": "Isolation prevents untrusted devices from reaching internal resources."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l5",
   "title": "Network Troubleshooting Tools",
   "subtitle": "Ping, traceroute, port tests, sockets and a layered method",
   "minutes": 30,
   "objectives": [
    "Apply a bottom-up method to network tickets",
    "Use ping, traceroute, port tests and socket tools on Windows, Linux and macOS",
    "Interpret common outputs to decide where a fault lies",
    "Document network evidence clearly in a ticket"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Network tickets feel vague: 'the internet is slow', 'the system is down'. Good support specialists turn vague reports into precise facts using a handful of tools and a fixed order of checks. Each test either passes, so you move up a layer, or fails, so you know where to dig."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Link",
       "text": "Is the cable connected or Wi-Fi associated? Check link lights, `ipconfig` or `ip link`."
      },
      {
       "title": "Address",
       "text": "Does the host have a valid IP, mask, gateway and DNS? Look for 169.254 or wrong subnets."
      },
      {
       "title": "Gateway",
       "text": "Can it ping the default gateway? If not, the problem is local."
      },
      {
       "title": "Beyond",
       "text": "Can it ping a known external IP? If yes, routing and the internet link are fine."
      },
      {
       "title": "Name and service",
       "text": "Does DNS resolve, and is the service's port reachable? Test the actual application last."
      }
     ],
     "title": "The five-check method"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "ping 192.168.1.1 -n 4",
      "Test-Connection 8.8.8.8 -Count 4",
      "tracert www.example.com",
      "Test-NetConnection mail.company.com -Port 587",
      "Get-NetTCPConnection -State Established | Select-Object -First 10",
      "arp -a                              # IP-to-MAC mappings learned on this subnet"
     ],
     "title": "The core toolkit on Windows"
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "ping -c 4 192.168.1.1",
      "traceroute www.example.com          # or tracepath if traceroute is not installed",
      "nc -zv mail.company.com 587         # is the port open?",
      "ss -tulpn                           # listening ports and owning processes",
      "ip neigh                            # neighbour (ARP) table",
      "curl -I https://intranet.company.local   # HTTP status and headers"
     ],
     "title": "The same checks on Linux"
    },
    {
     "type": "table",
     "head": [
      "Result",
      "Meaning",
      "Next step"
     ],
     "rows": [
      [
       "Request timed out to the gateway",
       "Local link, VLAN or firewall issue",
       "Check cable, Wi-Fi, port and host firewall"
      ],
      [
       "Ping to 8.8.8.8 works, names fail",
       "DNS problem",
       "Check DNS servers and test with Resolve-DnsName or dig"
      ],
      [
       "Traceroute stops at hop 3",
       "Path breaks after that router",
       "Report the hop to the network team or provider"
      ],
      [
       "TcpTestSucceeded : False",
       "Port blocked or service not listening",
       "Check firewall rules and service status"
      ],
      [
       "High, variable ping times",
       "Congestion or weak Wi-Fi",
       "Test wired, check utilisation and signal"
      ]
     ],
     "title": "Reading common results"
    },
    {
     "type": "tree",
     "title": "'The internet is down': where is the fault?",
     "root": {
      "label": "Run the five checks in order",
      "children": [
       {
        "label": "Link down",
        "text": "Cable, switch port, Wi-Fi association"
       },
       {
        "label": "169.254 or no IP",
        "text": "DHCP, VLAN, exhausted scope"
       },
       {
        "label": "Gateway ping fails",
        "text": "Local switch, VLAN, host firewall"
       },
       {
        "label": "External IP fails",
        "text": "Router or ISP link; check status"
       },
       {
        "label": "Names fail",
        "text": "DNS servers; test with Resolve-DnsName or dig"
       },
       {
        "label": "One service fails",
        "text": "Port test, service status, firewall rule"
       }
      ]
     },
     "caption": "Stop at the first check that fails: that branch tells you where the fault lives and who to involve. Everything to its left has already been proven to work."
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Many servers and firewalls block ICMP, so a failed ping does not always mean a host is down. Confirm with a port test to the service the user actually needs, such as HTTPS on 443.",
     "title": "Ping can lie"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Throughput",
       "expr": "Mbps = (bytes transferred x 8) / seconds / 1,000,000",
       "meaning": "Transferring 500 MB in 50 s is 4,000 megabits / 50 = 80 Mbps."
      },
      {
       "name": "Packet loss",
       "expr": "loss % = (sent - received) / sent x 100",
       "meaning": "Sending 100 pings and receiving 96 is 4% loss, enough to ruin voice calls."
      },
      {
       "name": "Round-trip time",
       "expr": "RTT = time for request plus reply",
       "meaning": "Local LAN under 1-2 ms; same-country cloud 10-50 ms; overseas 150 ms or more."
      }
     ],
     "title": "Bandwidth and latency checks"
    },
    {
     "type": "keypoints",
     "items": [
      "**Cable tester** confirms each pair is wired and continuous.",
      "**Tone generator and probe** traces an unlabelled cable to its patch-panel port.",
      "**Loopback plug** tests a network port without another device.",
      "**Wi-Fi analyser app** shows channels, neighbours and signal strength.",
      "**Link lights** on switches and NICs give an instant yes or no."
     ],
     "title": "Physical-layer tools"
    },
    {
     "type": "template",
     "title": "Network troubleshooting log",
     "purpose": "Capture evidence so the next person, or the provider, can act without repeating your tests.",
     "columns": [
      "Time",
      "Test",
      "From (host)",
      "To (target)",
      "Result",
      "Conclusion"
     ],
     "example": [
      [
       "10:05",
       "ping gateway",
       "ACC-PC-12",
       "192.168.10.1",
       "4/4 replies, 1 ms",
       "Local link OK"
      ],
      [
       "10:07",
       "Test-NetConnection port 443",
       "ACC-PC-12",
       "erp.company.com",
       "TcpTestSucceeded False",
       "Port blocked or service down; check firewall"
      ]
     ],
     "rows": 8
    },
    {
     "type": "case",
     "title": "The branch that cannot reach the ERP",
     "context": "A bank branch in Cumilla reports that no one can open the head-office ERP system since 9:00, although internet browsing works. Branch PCs get correct DHCP addresses, the gateway replies to ping, and `Resolve-DnsName erp.bank.local` returns 10.50.1.20. `Test-NetConnection 10.50.1.20 -Port 443` fails, and `tracert 10.50.1.20` stops at the branch router.",
     "questions": [
      "Which layers have you proven are working?",
      "Where is the fault most likely?",
      "What do you write in the escalation to the network team?"
     ],
     "answer": "**Working:** link, addressing, gateway and DNS all pass, and the internet path works. **Likely fault:** the route or VPN tunnel from the branch router to head office (traceroute stops at the branch router), or a firewall rule change. **Escalation note:** time the fault started, scope (whole branch), the exact tests and outputs (DNS answer 10.50.1.20, port 443 test failed, traceroute stops at hop 1), what still works (internet), and a request to check the branch-to-HQ tunnel and recent firewall changes. This avoids anyone repeating basic tests."
    },
    {
     "type": "scenario",
     "situation": "One accountant says 'the internet is slow'. Colleagues on the same floor are fine. Her PC shows 100 Mbps link speed while others show 1 Gbps, and the cable is coiled under a chair wheel.",
     "options": [
      {
       "text": "Call the internet provider",
       "feedback": "Colleagues are fine, so the internet link is not the issue.",
       "best": false
      },
      {
       "text": "Reinstall the network driver",
       "feedback": "Possible later, but physical damage is visible and more likely.",
       "best": false
      },
      {
       "text": "Replace the damaged patch cable and confirm the link returns to 1 Gbps",
       "feedback": "Correct. A crushed cable often drops to 100 Mbps or produces errors. The single affected PC and the evidence point there.",
       "best": true
      },
      {
       "text": "Change her DNS server",
       "feedback": "DNS does not change the physical link speed.",
       "best": false
      }
     ],
     "title": "Only one PC is slow"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Ping",
       "def": "A tool that sends ICMP echo requests to test reachability and round-trip time."
      },
      {
       "term": "Traceroute",
       "def": "A tool that lists each router hop on the path to a destination, showing where a path breaks or slows."
      },
      {
       "term": "Test-NetConnection",
       "def": "A PowerShell cmdlet that tests ping, TCP port reachability and routes to a target."
      },
      {
       "term": "ss",
       "def": "A Linux utility that lists open sockets and listening ports, replacing older netstat."
      },
      {
       "term": "Latency",
       "def": "The delay for data to travel across a network, usually measured as round-trip time in milliseconds."
      },
      {
       "term": "Packet loss",
       "def": "The percentage of packets that fail to reach their destination; small amounts damage voice and video."
      },
      {
       "term": "Cable tester",
       "def": "A device that checks network cable pairs for continuity, wiring faults and sometimes length."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Turn vague reports into facts with the same five checks every time.",
      "A failed ping is not proof a host is down; test the real service port.",
      "Traceroute shows where a path breaks, which tells you who to escalate to.",
      "Loss above about 1-2% or high, variable latency ruins voice and video.",
      "Write down every test and result so nobody repeats them."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A user can ping 8.8.8.8 but cannot browse to any site by name. What is the next test?",
       "options": [
        "Test DNS resolution with Resolve-DnsName or dig",
        "Replace the cable",
        "Check the printer",
        "Renew the Wi-Fi password and reconnect the laptop to the wireless network"
       ],
       "answer": 0,
       "explain": "IP connectivity beyond the gateway works, so name resolution is the next layer to test."
      },
      {
       "q": "A server blocks ICMP. How can you confirm its web service is reachable?",
       "options": [
        "ping -t",
        "Test-NetConnection server -Port 443",
        "arp -a",
        "ipconfig /flushdns"
       ],
       "answer": 1,
       "explain": "A TCP port test checks the actual service even when ping is blocked."
      },
      {
       "q": "Which Linux command shows which process is listening on port 8080?",
       "options": [
        "ip route",
        "dig",
        "ss -tulpn",
        "chmod"
       ],
       "answer": 2,
       "explain": "ss -tulpn lists listening sockets with process names."
      },
      {
       "q": "Out of 200 pings, 190 replies arrive. What is the packet loss?",
       "options": [
        "10%",
        "5%",
        "2%",
        "19%"
       ],
       "answer": 1,
       "explain": "(200 - 190) / 200 x 100 = 5%."
      },
      {
       "q": "Traceroute to a head-office server stops at the first hop. What does this suggest?",
       "options": [
        "DNS failure",
        "The server's disk is full",
        "The path breaks at or just beyond the local router",
        "The user's password expired, so the router refuses to forward the traffic"
       ],
       "answer": 2,
       "explain": "Traceroute shows where forwarding stops, pointing to the local router or the next link."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m4",
 "order": 4,
 "code": "Resolve",
 "title": "Troubleshooting, Customer Service and Ticketing",
 "subtitle": "A disciplined method, excellent communication and service management that keeps people working",
 "outcomes": [
  "Apply a seven-step troubleshooting method and isolation techniques to any IT problem",
  "Find and remove root causes so incidents do not recur",
  "Communicate with users clearly, calmly and professionally",
  "Categorise, prioritise and document tickets within SLAs"
 ],
 "lessons": [
  {
   "id": "m4-l1",
   "title": "A Troubleshooting Method That Works",
   "subtitle": "Seven steps that turn guesswork into evidence",
   "minutes": 26,
   "objectives": [
    "Apply a seven-step troubleshooting method to any IT problem",
    "Ask questions that define the scope, timing and recent changes",
    "Form and test theories one at a time, in order of likelihood and ease",
    "Verify the fix with the user and document the outcome"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Experienced support staff are not faster because they know every answer. They are faster because they follow the same method every time: they gather facts before acting, change one thing at a time and confirm the result. Guessing feels quick but often creates new problems, especially on systems other people depend on."
    },
    {
     "type": "cycle",
     "title": "The ZITSS seven-step troubleshooting method",
     "center": "Evidence first",
     "items": [
      {
       "label": "Identify",
       "text": "Gather facts: symptoms, error messages, scope, timing and recent changes. Reproduce if you can. Back up data before risky work."
      },
      {
       "label": "Theorise",
       "text": "List probable causes, starting with the most likely and easiest to test. Question the obvious."
      },
      {
       "label": "Test",
       "text": "Test one theory at a time. If it is disproved, move to the next or escalate."
      },
      {
       "label": "Plan",
       "text": "Decide how to fix it, considering impact, approvals, change windows and rollback."
      },
      {
       "label": "Implement",
       "text": "Apply the fix, or escalate with your evidence."
      },
      {
       "label": "Verify",
       "text": "Confirm full functionality with the user and add preventive measures."
      },
      {
       "label": "Document",
       "text": "Record symptoms, cause, actions and outcome in the ticket and knowledge base."
      }
     ],
     "caption": "The method is a loop: a disproved theory sends you back to Theorise, and what you document feeds the next Identify. Never skip Verify or Document to save time."
    },
    {
     "type": "table",
     "head": [
      "Question",
      "Why it matters"
     ],
     "rows": [
      [
       "What exactly happens? Can you show me or send the error text?",
       "Exact messages narrow the cause quickly"
      ],
      [
       "When did it start? Did it ever work?",
       "Points to a change or a new set-up issue"
      ],
      [
       "What changed recently: updates, new software, moves, passwords?",
       "Most incidents follow a change"
      ],
      [
       "Who else is affected?",
       "One user, one team or everyone changes where you look"
      ],
      [
       "Is it constant or intermittent? Any pattern by time or place?",
       "Patterns reveal heat, load, schedules or Wi-Fi coverage"
      ],
      [
       "What have you already tried?",
       "Avoids repeating tests and reveals side effects"
      ]
     ],
     "title": "Questions that define the problem"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "If **one user** is affected, look at their device, account or location. If **one team** is affected, look at what they share: a printer, a group, a switch. If **everyone** is affected, look at shared services such as DNS, the internet link or a cloud service, and declare an incident early.",
     "title": "Scope is your fastest clue"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Good theories",
       "items": [
        "Explain all the symptoms",
        "Fit the scope and timing",
        "Can be tested quickly and safely",
        "Start simple: power, cables, sign-in, recent change"
       ]
      },
      {
       "title": "Weak theories",
       "items": [
        "Explain only part of the evidence",
        "Ignore who is affected",
        "Require major changes to test",
        "Come from 'last time it was...' without checking"
       ]
      }
     ],
     "title": "Good theories versus weak theories"
    },
    {
     "type": "matrix",
     "title": "Which theory to test first",
     "x": "Effort or risk to test",
     "y": "Likelihood it explains the evidence",
     "quadrants": [
      {
       "title": "Test first",
       "items": [
        "Recent change, new add-in",
        "Cable, sign-in, power"
       ]
      },
      {
       "title": "Plan, then test",
       "items": [
        "Needs a change window or approval",
        "Prepare rollback"
       ]
      },
      {
       "title": "Quick checks along the way",
       "items": [
        "Restart the app",
        "Try another port or browser"
       ]
      },
      {
       "title": "Test last or escalate",
       "items": [
        "Rebuilds and hardware swaps on a hunch"
       ]
      }
     ],
     "caption": "Rank theories by how likely they are and how cheap and safe they are to test. Likely, cheap tests come first; expensive, unlikely ones come last or go to a specialist."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "If you change three settings and the problem disappears, you do not know which change fixed it, and you may have introduced two new problems. Change one variable, test, and undo it if it did not help.",
     "title": "Change one thing at a time"
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Recognise the limit",
       "text": "Your skill, access or authority is exceeded, or the SLA is at risk."
      },
      {
       "label": "Package evidence",
       "text": "Symptoms, scope, tests done and results, timestamps, screenshots."
      },
      {
       "label": "Choose the right team",
       "text": "Network, server, application owner or vendor."
      },
      {
       "label": "Tell the user",
       "text": "Who has it now and when they will hear next."
      },
      {
       "label": "Follow up",
       "text": "Stay the user's contact until it is resolved."
      }
     ],
     "title": "Escalating well"
    },
    {
     "type": "checklist",
     "title": "Before you close any ticket",
     "items": [
      "The user confirms the problem is solved in their own words.",
      "Related functions still work (printing, email, shared drives).",
      "Root cause is recorded, or marked unknown with evidence.",
      "Any temporary workarounds or test changes are removed.",
      "Preventive action is noted, such as a KB article or a problem record.",
      "Time spent and category are recorded accurately."
     ]
    },
    {
     "type": "scenario",
     "situation": "A sales manager says email will not open on his laptop. You notice a new add-in was installed this morning. Colleagues' email works. He has a client meeting in an hour.",
     "options": [
      {
       "text": "Reinstall the whole office suite immediately",
       "feedback": "Heavy-handed: it takes time, may not fix an add-in issue and skips testing a likely cause.",
       "best": false
      },
      {
       "text": "Reset his password",
       "feedback": "Nothing suggests an account problem; others' email works and the app will not open at all.",
       "best": false
      },
      {
       "text": "Escalate to the email server team",
       "feedback": "The server is fine for everyone else; this is local to his laptop.",
       "best": false
      },
      {
       "text": "Start the mail app in safe mode or with add-ins disabled to test the new add-in theory",
       "feedback": "Correct. It tests the most likely, recent change quickly and safely, with minimal disruption.",
       "best": true
      }
     ],
     "title": "Email app will not open for one user"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Troubleshooting methodology",
       "def": "A repeatable sequence of steps for finding and fixing problems based on evidence rather than guesswork."
      },
      {
       "term": "Scope (of an incident)",
       "def": "How many users, devices, locations or services are affected by a problem."
      },
      {
       "term": "Theory of probable cause",
       "def": "A testable explanation of a problem that fits the symptoms, scope and timing."
      },
      {
       "term": "Reproduce",
       "def": "Make a problem happen again on purpose to observe it and test fixes."
      },
      {
       "term": "Rollback",
       "def": "Reversing a change to return a system to its previous working state."
      },
      {
       "term": "Verification",
       "def": "Confirming with the user and through testing that the fix works and nothing else broke."
      },
      {
       "term": "Root cause",
       "def": "The underlying reason a problem occurred, which, if fixed, prevents it recurring."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Gather facts first: symptoms, scope, timing and recent changes.",
      "Scope is the fastest clue: one user, one team or everyone points to different places.",
      "Test the most likely, cheapest theory first, and change one thing at a time.",
      "Escalate with evidence and stay the user's contact until it is fixed.",
      "Close only after the user confirms and the root cause and fix are documented."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What should you do FIRST when a user reports a problem?",
       "options": [
        "Gather information about symptoms, scope and recent changes",
        "Restart their computer",
        "Escalate to Tier 2",
        "Reinstall the application they were using when the problem started"
       ],
       "answer": 0,
       "explain": "Identifying the problem comes before theories or fixes. Restarts and reinstalls without facts are guesses."
      },
      {
       "q": "You changed a setting and it did not fix the problem. What should you do?",
       "options": [
        "Leave it and try more changes",
        "Undo it before testing the next theory",
        "Close the ticket",
        "Change several more settings at once to save time on the ticket"
       ],
       "answer": 1,
       "explain": "Undo failed changes so you do not create new problems and can attribute any later fix correctly."
      },
      {
       "q": "Every user in the building suddenly loses access to a cloud app. Where should you look first?",
       "options": [
        "One user's browser cache and saved cookies, starting with the first caller",
        "Shared services: internet link, DNS or the provider's status",
        "Each user's keyboard",
        "The printer queue"
       ],
       "answer": 1,
       "explain": "Wide scope points to shared components, not individual devices."
      },
      {
       "q": "Which step comes right after implementing a fix?",
       "options": [
        "Document the change in the knowledge base and close the ticket",
        "Theorise",
        "Verify full functionality with the user",
        "Identify"
       ],
       "answer": 2,
       "explain": "Verification confirms the fix works before documentation and closure."
      },
      {
       "q": "Why is 'What changed recently?' such a valuable question?",
       "options": [
        "Users enjoy answering it",
        "Most incidents are triggered by a recent change",
        "It replaces testing",
        "It is required by law in most service management standards and audits"
       ],
       "answer": 1,
       "explain": "Recent changes are the most common trigger, so they point to likely causes quickly; you still test them."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l2",
   "title": "Diagnostic Techniques and Root Cause",
   "subtitle": "Isolate faults, read the evidence and stop problems coming back",
   "minutes": 28,
   "objectives": [
    "Use isolation techniques: half-split, known-good swap and minimum configuration",
    "Collect evidence from logs, performance tools and the user's screen",
    "Use remote support tools safely and with consent",
    "Find root causes with the five whys and a cause-and-effect diagram"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Once you know what the problem is, you need to find where it lives. Diagnostic techniques are ways of shrinking the search area quickly. Root-cause techniques then make sure that, once fixed, the same problem does not come back next week for fifty more users."
    },
    {
     "type": "table",
     "head": [
      "Technique",
      "How it works",
      "Example"
     ],
     "rows": [
      [
       "Half-split",
       "Test the middle of a chain; discard the half that works",
       "Ping the gateway: works, so the fault is beyond it"
      ],
      [
       "Known-good swap",
       "Replace a suspect part with one known to work",
       "Swap the monitor cable with a tested one"
      ],
      [
       "Move the problem",
       "Move the device, user or part to see if the fault follows",
       "Try the user's laptop at another desk"
      ],
      [
       "Compare with a working system",
       "Find differences between good and bad",
       "Compare driver versions on two identical PCs"
      ],
      [
       "Minimum configuration",
       "Remove everything non-essential, then add back",
       "Clean boot with start-up apps disabled"
      ]
     ],
     "title": "Isolation techniques"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "Get-WinEvent -FilterHashtable @{LogName='System'; Level=1,2; StartTime=(Get-Date).AddHours(-24)} |",
      "  Select-Object TimeCreated, Id, ProviderName, Message -First 15",
      "Get-HotFix | Sort-Object InstalledOn -Descending | Select-Object -First 5",
      "Get-CimInstance Win32_OperatingSystem | Select-Object LastBootUpTime, FreePhysicalMemory",
      "Get-Volume C | Select-Object SizeRemaining, Size"
     ],
     "title": "Collecting evidence on Windows",
     "note": "Level 1 is Critical and Level 2 is Error. Recent updates and the last boot time are quick ways to correlate a fault with a change."
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "journalctl -p err -b                 # errors since the last boot",
      "uptime                               # load averages and time since boot",
      "free -h && df -h",
      "top -b -n 1 | head -n 15             # snapshot of busiest processes",
      "grep -i 'out of memory' /var/log/kern.log   # Debian/Ubuntu kernel log"
     ],
     "title": "Collecting evidence on Linux"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "A screenshot or a short screen recording of the error is worth ten minutes of questions. Teach users the screenshot shortcut on their platform and ask for one in your first reply.",
     "title": "Ask for the screen, not a description"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Do",
       "items": [
        "Ask permission before connecting and say what you will do",
        "Use the organisation's approved, logged remote tool",
        "Close sensitive windows or ask the user to",
        "Disconnect and confirm when finished"
       ]
      },
      {
       "title": "Do not",
       "items": [
        "Use personal or free remote tools with no logging",
        "Browse the user's personal files",
        "Leave unattended access enabled without a reason",
        "Accept a 'remote support' call you did not initiate (common scam)"
       ]
      }
     ],
     "title": "Remote support done right"
    },
    {
     "type": "sequence",
     "title": "A legitimate remote support session",
     "actors": [
      "User",
      "Technician",
      "Remote tool"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Reports issue; ticket logged"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Calls back on the known number",
       "note": "IT starts contact, not a stranger"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Opens session for this ticket"
      },
      {
       "from": 2,
       "to": 0,
       "label": "Consent prompt: allow viewing?"
      },
      {
       "from": 0,
       "to": 2,
       "label": "Approves"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Explains each step while working"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Ends session; log saved"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Confirms the fix",
       "reply": true
      }
     ],
     "caption": "Real support starts from a ticket, is initiated by IT through an approved, logged tool and needs the user's consent each time. A caller who reverses this order and asks the user to install something is running the classic support scam."
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "5W",
       "title": "Five whys",
       "text": "Ask 'why?' repeatedly until you reach a cause you can act on, usually a process or design gap."
      },
      {
       "label": "FB",
       "title": "Fishbone",
       "text": "Group possible causes under people, process, technology, environment and suppliers."
      },
      {
       "label": "TL",
       "title": "Timeline",
       "text": "Lay out events with timestamps to see what happened before the failure."
      },
      {
       "label": "CA",
       "title": "Change analysis",
       "text": "List every change in the period before the problem and test each."
      }
     ],
     "title": "Root-cause techniques"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Why did lab PCs stop logging users in?",
       "text": "The system drives were full."
      },
      {
       "title": "Why were the drives full?",
       "text": "Hundreds of user profiles were stored locally."
      },
      {
       "title": "Why were profiles kept?",
       "text": "Each student who logs in creates a profile and nothing removes old ones."
      },
      {
       "title": "Why does nothing remove them?",
       "text": "The profile clean-up policy was never set when the lab was rebuilt."
      },
      {
       "title": "Why was it missed?",
       "text": "The lab build checklist did not include it. Fix: add the policy and update the checklist."
      }
     ],
     "title": "Five whys: lab PCs out of disk space"
    },
    {
     "type": "case",
     "title": "Monday morning printing failures",
     "context": "Every Monday, about 30 users at a pharmaceutical company in Savar cannot print for the first hour. By 10:00 it works. Restarting the print server 'fixes' it. Logs show the print server installs updates and reboots at 03:00 on Sunday, and its print spooler service is set to 'Manual' start. Two months ago it was set to 'Automatic'.",
     "questions": [
      "Which diagnostic technique revealed the pattern?",
      "What is the root cause?",
      "What permanent fixes and preventive actions would you propose?"
     ],
     "answer": "**Technique:** timeline and change analysis: failures follow the Sunday reboot every week, and the spooler start type was changed two months ago. **Root cause:** after the weekly reboot the spooler does not start automatically; it only starts when an administrator restarts the server or someone starts the service manually. **Fix:** set the spooler to Automatic (with recovery options to restart on failure), add a service health check after maintenance reboots, raise a problem record noting who changed the start type and why, and add 'verify key services after patch reboot' to the patching checklist."
    },
    {
     "type": "tree",
     "title": "Fishbone, drawn as a tree: Monday printing failures",
     "root": {
      "label": "Users cannot print on Monday mornings",
      "children": [
       {
        "label": "People",
        "text": "Start type changed with no record"
       },
       {
        "label": "Process",
        "text": "No service check after patch reboots"
       },
       {
        "label": "Technology",
        "text": "Spooler set to Manual start"
       },
       {
        "label": "Environment",
        "text": "Sunday 03:00 maintenance reboot"
       },
       {
        "label": "Suppliers",
        "text": "Updates require a restart"
       }
      ]
     },
     "caption": "Grouping candidate causes by category stops a team fixating on technology alone. The Manual start type is the technical fault, but the missing post-reboot check is what let it recur every week."
    },
    {
     "type": "scenario",
     "situation": "Twelve identical laptops in a finance team freeze for several seconds a few times a day. Twelve laptops of a different model are fine. All run the same image.",
     "options": [
      {
       "text": "Compare drivers and firmware between the two models and check the affected model's known issues",
       "feedback": "Correct. The fault follows the hardware model, so model-specific drivers or firmware are the most likely cause.",
       "best": true
      },
      {
       "text": "Reimage all twelve laptops",
       "feedback": "They share the same image as working laptops, so the image is unlikely to be the cause.",
       "best": false
      },
      {
       "text": "Replace the users' keyboards",
       "feedback": "Keyboards cannot cause whole-system freezes.",
       "best": false
      },
      {
       "text": "Ask the users to restart more often",
       "feedback": "This hides the symptom without finding the cause.",
       "best": false
      }
     ],
     "title": "Intermittent freezes on one model"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Half-split",
       "def": "A diagnostic technique that tests the midpoint of a system or path to eliminate half of the possible fault locations."
      },
      {
       "term": "Known-good component",
       "def": "A part or device verified to work, used to isolate faults by substitution."
      },
      {
       "term": "Clean boot",
       "def": "Starting an OS with non-essential start-up programs and services disabled to isolate software conflicts."
      },
      {
       "term": "Five whys",
       "def": "A root-cause technique that asks 'why?' repeatedly until a fixable underlying cause is found."
      },
      {
       "term": "Fishbone diagram",
       "def": "A cause-and-effect diagram that groups possible causes into categories such as people, process and technology."
      },
      {
       "term": "Remote support tool",
       "def": "Approved software that lets a technician view or control a user's device over the network with consent and logging."
      },
      {
       "term": "Problem record",
       "def": "A record that tracks the investigation of the underlying cause of one or more incidents."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Shrink the search area with half-split, known-good swaps, moving the problem and comparison.",
      "Collect evidence from logs, recent updates and boot times before changing anything.",
      "Remote sessions need an approved, logged tool, the user's consent and a ticket.",
      "Unsolicited 'support' calls asking users to install tools are scams: refuse and report.",
      "Root-cause tools (five whys, fishbone, timeline, change analysis) target process gaps, not people."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A fault follows a laptop when it is moved to another desk and another network port. What does this suggest?",
       "options": [
        "The original network port is faulty",
        "The building's DNS server is failing",
        "The switch needs replacing",
        "The fault is in the laptop itself"
       ],
       "answer": 3,
       "explain": "If the fault moves with the device, the device is the cause, not the location."
      },
      {
       "q": "Which technique would you use to rule out half of a long network path at once?",
       "options": [
        "Half-split testing",
        "Five whys",
        "Fishbone",
        "Clean install"
       ],
       "answer": 0,
       "explain": "Half-split tests the midpoint to eliminate half the path."
      },
      {
       "q": "A caller claiming to be from a well-known software company's support team asks a user to install a remote tool. What should the user do?",
       "options": [
        "Install it if the caller sounds professional",
        "Hang up and report it to IT",
        "Give them the password only",
        "Restart the PC"
       ],
       "answer": 1,
       "explain": "Unsolicited support calls are a common scam. Users should refuse and report."
      },
      {
       "q": "What is the main purpose of the five whys?",
       "options": [
        "To assign blame",
        "To speed up password resets by asking the user five security questions",
        "To list all users affected",
        "To reach an actionable underlying cause"
       ],
       "answer": 3,
       "explain": "The aim is to find a cause you can fix to prevent recurrence, not to blame people."
      },
      {
       "q": "Which Linux command shows error-level journal entries since the last boot?",
       "options": [
        "df -h",
        "journalctl -p err -b",
        "uptime",
        "ls /var"
       ],
       "answer": 1,
       "explain": "journalctl -p err filters by priority and -b limits to the current boot."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l3",
   "title": "Customer Service and Communication",
   "subtitle": "Listening, explaining and calming people down while you fix things",
   "minutes": 24,
   "objectives": [
    "Use active listening and empathy to understand users' needs",
    "Explain technical issues and fixes in plain language",
    "Handle frustrated or difficult users professionally",
    "Write clear updates by email and chat and set realistic expectations"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "For the user, the IT problem is never really about the printer or the password. It is about a deadline, a patient, a customer or a manager who is waiting. Great support specialists solve the technical problem **and** the human one. The way you communicate decides whether users trust IT or work around it."
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "L",
       "title": "Listen",
       "text": "Let the user explain without interruption, then summarise back what you heard."
      },
      {
       "label": "E",
       "title": "Empathise",
       "text": "Acknowledge the impact: 'I understand the report is due at noon.'"
      },
      {
       "label": "A",
       "title": "Act",
       "text": "Explain the next step, do it and keep them informed."
      },
      {
       "label": "P",
       "title": "Promise and follow up",
       "text": "Commit to a time for the next update and keep that promise."
      }
     ],
     "title": "The LEAP model for every interaction"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Say",
       "items": [
        "'Let me check that for you.'",
        "'Here is what I am going to do next.'",
        "'I will update you by 3 pm, even if it is not fixed yet.'",
        "'Thanks for the screenshot, that helps a lot.'"
       ]
      },
      {
       "title": "Avoid",
       "items": [
        "'That is impossible.'",
        "'You must have done something.'",
        "'It works on my machine.'",
        "Acronyms and jargon such as 'your DHCP lease expired'"
       ]
      }
     ],
     "title": "Words that help and words that hurt"
    },
    {
     "type": "table",
     "head": [
      "Channel",
      "Best for",
      "Tips"
     ],
     "rows": [
      [
       "Phone or video",
       "Urgent, complex or emotional issues",
       "Confirm details in writing afterwards"
      ],
      [
       "Chat",
       "Quick questions, guided fixes",
       "Short messages, one step at a time"
      ],
      [
       "Email or ticket portal",
       "Updates, non-urgent requests, records",
       "Clear subject, summary first, next step and time"
      ],
      [
       "In person",
       "Hardware, VIP or vulnerable users, training",
       "Respect the workspace and privacy"
      ]
     ],
     "title": "Choosing the right channel"
    },
    {
     "type": "matrix",
     "title": "Picking a channel for the moment",
     "x": "Urgency",
     "y": "Complexity or emotion",
     "quadrants": [
      {
       "title": "Scheduled call or visit",
       "items": [
        "Training, a new device",
        "A sensitive conversation"
       ]
      },
      {
       "title": "Phone or video now",
       "items": [
        "Outage before a deadline",
        "An upset or vulnerable user"
       ]
      },
      {
       "title": "Portal, email or KB",
       "items": [
        "Requests and how-to questions",
        "Routine status updates"
       ]
      },
      {
       "title": "Chat",
       "items": [
        "Quick guided fix",
        "One step at a time"
       ]
      }
     ],
     "caption": "Match the channel to the urgency and the emotional weight of the issue. Whatever channel you use, confirm the outcome in writing in the ticket."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Stay calm and do not take it personally",
       "text": "Their frustration is with the situation, not with you."
      },
      {
       "title": "Let them vent briefly",
       "text": "Interrupting escalates emotion; listen for facts inside the complaint."
      },
      {
       "title": "Acknowledge and apologise for the impact",
       "text": "'I am sorry this has disrupted your morning.' You are not admitting fault."
      },
      {
       "title": "Move to action",
       "text": "Explain exactly what you will do now and when they will hear next."
      },
      {
       "title": "Set boundaries if needed",
       "text": "If abuse continues, say you want to help, and involve your team lead according to policy."
      }
     ],
     "title": "Handling a frustrated user"
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "Instead of 'Your profile is corrupted, so I will rebuild it', say: 'Your laptop's saved settings for your account are damaged. I will create a fresh set. Your files are safe in the company cloud storage, but you will need to sign in to a few apps again.' The user knows what will happen and what to expect.",
     "title": "Translating jargon"
    },
    {
     "type": "template",
     "title": "Status update message",
     "purpose": "A consistent structure for updates by email, chat or ticket so users always know where things stand.",
     "columns": [
      "Section",
      "What to write",
      "Example"
     ],
     "example": [
      [
       "Summary",
       "One line on the issue and current state",
       "Your shared-drive access is still blocked; we have found the cause."
      ],
      [
       "Next step and time",
       "What happens next and when you will update",
       "The server team is correcting permissions; I will update you by 2:30 pm."
      ]
     ],
     "rows": 4
    },
    {
     "type": "keypoints",
     "items": [
      "Be on time for appointments and tell users if you are delayed.",
      "Respect confidentiality: never discuss what you saw on someone's screen.",
      "Ask before touching a user's device, files or desk.",
      "Avoid personal calls and distractions while helping a user.",
      "Be inclusive: adapt to language, accessibility needs and seniority without condescension.",
      "Own your mistakes quickly and explain how you will fix them."
     ],
     "title": "Professional conduct"
    },
    {
     "type": "scenario",
     "situation": "The head of the Accounts department at a Chattogram port company calls, angry, because his team's shared folder has been inaccessible for an hour and month-end reports are due. He says IT is 'useless'. You already know the server team is restoring the folder.",
     "options": [
      {
       "text": "Explain that it is the server team's fault, not yours",
       "feedback": "Blaming colleagues makes IT look disorganised and does not help him.",
       "best": false
      },
      {
       "text": "Acknowledge the impact, explain the restore in plain terms, give a realistic time and offer a workaround such as access to yesterday's copy",
       "feedback": "Correct. Empathy, clear facts, a time commitment and a practical workaround address both the emotion and the business need.",
       "best": true
      },
      {
       "text": "Tell him to calm down before you will help",
       "feedback": "Telling people to calm down usually escalates the situation.",
       "best": false
      },
      {
       "text": "Promise it will be fixed in five minutes to end the call",
       "feedback": "Unrealistic promises destroy trust when they are broken.",
       "best": false
      }
     ],
     "title": "The angry head of department"
    },
    {
     "type": "reflection",
     "prompt": "Recall a time you were frustrated with a service provider. Which of their phrases or actions made it worse, and which helped? Write two phrases you will use, and two you will avoid, in your own support work."
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Active listening",
       "def": "Fully concentrating on the speaker, then summarising back what was said to confirm understanding."
      },
      {
       "term": "Empathy",
       "def": "Recognising and acknowledging how a problem affects the other person."
      },
      {
       "term": "Expectation setting",
       "def": "Telling users clearly what will happen next and when, so they can plan."
      },
      {
       "term": "Jargon",
       "def": "Technical language that the listener may not understand; it should be translated into plain terms."
      },
      {
       "term": "Workaround",
       "def": "A temporary way for the user to keep working while the real fix is in progress."
      },
      {
       "term": "Follow-up",
       "def": "Contacting the user after a fix or at an agreed time to update them or confirm the fix held."
      },
      {
       "term": "Confidentiality",
       "def": "Keeping private any information you see or hear while supporting users."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Solve the human problem as well as the technical one: Listen, Empathise, Act, Promise.",
      "Translate jargon into what the user will see and what they need to do.",
      "Choose the channel by urgency and emotion, and confirm in writing.",
      "Keep every promised update time, even when there is no fix yet.",
      "Respect confidentiality: what you see on a user's screen stays private."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A user is very upset about a lost file. What should you do first?",
       "options": [
        "Listen, acknowledge the impact and gather the facts",
        "Explain why it was their fault",
        "Escalate to management immediately",
        "Tell them deleted files cannot be recovered so they can start again quickly"
       ],
       "answer": 0,
       "explain": "Listening and empathy calm the situation and reveal the facts you need."
      },
      {
       "q": "Which update is the most useful to a user?",
       "options": [
        "'Working on it.'",
        "'Your DHCP option 6 is wrong, so the scope options need to be reconfigured.'",
        "'Cause found; vendor patch installing; I will confirm by 4 pm.'",
        "'Should be fine soon.'"
       ],
       "answer": 2,
       "explain": "It states progress, the next step and a time, in plain language."
      },
      {
       "q": "When is phone or video better than email?",
       "options": [
        "For routine updates",
        "For sending large log files and screenshots to the vendor's support team",
        "For password sharing",
        "For urgent, complex or emotional issues"
       ],
       "answer": 3,
       "explain": "Live conversation suits urgency and emotion; written channels suit records. Passwords should never be shared."
      },
      {
       "q": "You promised an update by 2 pm but have no progress. What should you do?",
       "options": [
        "Wait until you have news",
        "Close the ticket",
        "Send an update at 2 pm with progress so far and a next update time",
        "Ask the user to call you when they want an update, so you are not interrupted"
       ],
       "answer": 2,
       "explain": "Keeping the promise maintains trust even when there is no fix yet."
      },
      {
       "q": "While fixing a laptop you notice a colleague's salary file open on the screen. What should you do?",
       "options": [
        "Mention it to the team",
        "Copy it for safekeeping",
        "Ignore it and keep the information confidential",
        "Report the salary amount to HR in case it is higher than it should be"
       ],
       "answer": 2,
       "explain": "Support staff must keep anything they see confidential."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l4",
   "title": "Ticketing and IT Service Management",
   "subtitle": "Incidents, requests, priorities, SLAs and knowledge",
   "minutes": 30,
   "objectives": [
    "Distinguish incidents, service requests, problems and changes",
    "Prioritise tickets using impact and urgency",
    "Work within SLAs and track key support metrics",
    "Write high-quality ticket notes and knowledge-base articles"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A **ticketing system** is the memory of the support team. It makes sure nothing is forgotten, shows managers where time goes and lets anyone pick up a ticket where someone else left off. Good service management practices, described in widely used frameworks, give everyone the same language for what kind of work a ticket is and how urgent it is."
    },
    {
     "type": "table",
     "head": [
      "Type",
      "Definition",
      "Example",
      "Goal"
     ],
     "rows": [
      [
       "Incident",
       "Unplanned interruption or reduced quality of a service",
       "Email is down for the sales team",
       "Restore service fast"
      ],
      [
       "Service request",
       "A routine, pre-approved request",
       "New laptop, access to a shared folder",
       "Fulfil reliably"
      ],
      [
       "Problem",
       "The unknown cause of one or more incidents",
       "Why does the VPN drop every afternoon?",
       "Find and remove the root cause"
      ],
      [
       "Change",
       "Adding, modifying or removing something that could affect services",
       "Upgrading the firewall firmware",
       "Change safely with approval"
      ]
     ],
     "title": "Four kinds of work"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Priority",
       "expr": "priority = impact x urgency (looked up in a matrix)",
       "meaning": "Impact is how many people or how much business is affected; urgency is how quickly it hurts."
      },
      {
       "name": "SLA compliance",
       "expr": "compliance % = tickets resolved within target / total tickets x 100",
       "meaning": "If 470 of 500 tickets met target, compliance is 94%."
      },
      {
       "name": "First contact resolution",
       "expr": "FCR % = tickets solved at first contact / total tickets x 100",
       "meaning": "A high FCR means users get answers without being passed around."
      }
     ],
     "title": "Prioritising tickets"
    },
    {
     "type": "table",
     "head": [
      "Impact \\ Urgency",
      "High urgency",
      "Medium urgency",
      "Low urgency"
     ],
     "rows": [
      [
       "High impact (many users or critical service)",
       "P1 Critical",
       "P2 High",
       "P3 Medium"
      ],
      [
       "Medium impact (a team or important user)",
       "P2 High",
       "P3 Medium",
       "P4 Low"
      ],
      [
       "Low impact (one user, workaround exists)",
       "P3 Medium",
       "P4 Low",
       "P4 Low"
      ]
     ],
     "title": "A simple priority matrix"
    },
    {
     "type": "matrix",
     "title": "Impact and urgency at a glance",
     "x": "Urgency",
     "y": "Impact",
     "quadrants": [
      {
       "title": "P3 Medium: plan it soon",
       "items": [
        "A team affected, workaround exists"
       ]
      },
      {
       "title": "P1 or P2: act now",
       "items": [
        "Clinic registration down, patients queuing"
       ]
      },
      {
       "title": "P4 Low",
       "items": [
        "Request for a new mouse"
       ]
      },
      {
       "title": "P3 Medium: quick fix",
       "items": [
        "One user, meeting in 10 minutes"
       ]
      }
     ],
     "caption": "Seniority and volume of complaints are not on either axis. Set priority from impact and urgency, then let the SLA targets follow from the priority."
    },
    {
     "type": "table",
     "head": [
      "Priority",
      "Respond within",
      "Resolve within",
      "Example"
     ],
     "rows": [
      [
       "P1 Critical",
       "15 minutes",
       "4 hours",
       "Hospital patient system down"
      ],
      [
       "P2 High",
       "30 minutes",
       "8 business hours",
       "One department cannot print payroll"
      ],
      [
       "P3 Medium",
       "4 business hours",
       "3 business days",
       "Single user's app crashes, workaround exists"
      ],
      [
       "P4 Low",
       "1 business day",
       "10 business days",
       "Request a new mouse"
      ]
     ],
     "title": "Example SLA targets"
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Logged",
       "text": "Captured from phone, portal, email, chat or monitoring."
      },
      {
       "label": "Categorised and prioritised",
       "text": "Type, category and priority set."
      },
      {
       "label": "Assigned",
       "text": "Owned by a person or team."
      },
      {
       "label": "In progress",
       "text": "Diagnosed, updated, escalated if needed."
      },
      {
       "label": "Resolved",
       "text": "Fix applied and user confirms."
      },
      {
       "label": "Closed",
       "text": "Notes complete; automatically closes after a set time."
      }
     ],
     "title": "Ticket lifecycle"
    },
    {
     "type": "sequence",
     "title": "A ticket from first contact to closure",
     "actors": [
      "User",
      "Virtual agent",
      "Service desk",
      "Tier 2"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "'Payroll app will not open'"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Suggests a KB article",
       "reply": true
      },
      {
       "from": 0,
       "to": 1,
       "label": "Still failing"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Creates ticket with a summary"
      },
      {
       "from": 2,
       "to": 2,
       "label": "Checks summary; sets P2",
       "note": "a person verifies the AI draft"
      },
      {
       "from": 2,
       "to": 0,
       "label": "Ticket number + next update time",
       "reply": true
      },
      {
       "from": 2,
       "to": 3,
       "label": "Escalates with evidence"
      },
      {
       "from": 3,
       "to": 0,
       "label": "Fix applied: please test"
      },
      {
       "from": 0,
       "to": 3,
       "label": "Confirmed working",
       "reply": true
      },
      {
       "from": 2,
       "to": 2,
       "label": "Resolves, links KB, closes"
      }
     ],
     "caption": "A virtual agent can deflect simple issues and draft the ticket, but a person checks its summary and priority before work starts. Notice that the user hears something at every hand-off."
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "AI assistants need human verification",
     "text": "Many service desks now use AI assistants to suggest articles, summarise long tickets and draft replies. Treat every suggestion as a draft: check facts and commands before anyone runs them, never paste passwords or personal data into unapproved tools, and never let an assistant approve identity checks, access or MFA changes. The technician who sends the reply owns it."
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Write every ticket note as if a colleague who has never seen the ticket will pick it up at 2 am. Include what you tested, the results, what you changed and what is next. 'Fixed' is not a note.",
     "title": "Write notes for a stranger"
    },
    {
     "type": "template",
     "title": "Ticket note",
     "purpose": "A standard structure for work notes so every ticket can be picked up by anyone.",
     "columns": [
      "Field",
      "Content",
      "Example"
     ],
     "example": [
      [
       "Symptom",
       "What the user sees, exact errors",
       "Mail app shows 'Cannot start the mail client' since 09:10"
      ],
      [
       "Tests and results",
       "What you checked and found",
       "Safe mode opens; disabling CRM add-in fixes start-up"
      ],
      [
       "Action and outcome",
       "Change made, user confirmation, next step",
       "Add-in disabled, user confirmed at 09:40; problem record raised for add-in update"
      ]
     ],
     "rows": 5
    },
    {
     "type": "keypoints",
     "items": [
      "A title written the way users describe the problem, such as 'Cannot connect to office Wi-Fi'.",
      "Who it applies to: OS, device type, location.",
      "Short numbered steps with screenshots.",
      "Separate sections for users and for technicians.",
      "An owner and a review date so it stays accurate."
     ],
     "title": "What makes a good knowledge-base article"
    },
    {
     "type": "case",
     "title": "A service desk drowning in tickets",
     "context": "A university IT service desk in Dhaka receives about 1,200 tickets a month with four staff. Users complain that tickets 'disappear'. Analysis shows 35% are password resets, 15% are 'how do I connect to Wi-Fi' questions, many tickets have no category and P1 incidents are logged by email like everything else.",
     "questions": [
      "Which changes would reduce ticket volume most?",
      "How would you fix the 'disappearing' tickets?",
      "How should P1 incidents be handled differently?"
     ],
     "answer": "**Reduce volume:** introduce self-service password reset with MFA (removing up to a third of tickets) and publish Wi-Fi set-up articles linked from the portal and the login page. **Disappearing tickets:** make category and priority mandatory, assign every ticket to an owner, send automatic acknowledgements with ticket numbers and use queue dashboards showing ageing tickets. **P1 handling:** a phone line or monitoring alert for critical incidents, immediate assignment, a named incident lead, regular status updates to affected users and a short review afterwards."
    },
    {
     "type": "scenario",
     "situation": "At 10:00 you have two new tickets: (A) the managing director's second monitor flickers; he can still work on his laptop screen. (B) The outpatient registration system at a clinic is down for all 12 reception staff and patients are queuing.",
     "options": [
      {
       "text": "Do A first because the requester is the most senior person",
       "feedback": "Seniority alone does not set priority; impact and urgency do.",
       "best": false
      },
      {
       "text": "Work on both at the same time, switching every five minutes",
       "feedback": "Constant switching slows both and risks mistakes.",
       "best": false
      },
      {
       "text": "Do B first as a P1 incident and send A a quick acknowledgement with a time",
       "feedback": "Correct. B has high impact and high urgency. A has a workaround and low impact, so it waits, with a polite update.",
       "best": true
      },
      {
       "text": "Escalate both to Tier 3",
       "feedback": "Neither ticket needs escalation before first diagnosis.",
       "best": false
      }
     ],
     "title": "Two tickets at once"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Incident",
       "def": "An unplanned interruption to a service or a reduction in its quality."
      },
      {
       "term": "Service request",
       "def": "A formal request from a user for something routine, such as access, information or equipment."
      },
      {
       "term": "Problem",
       "def": "The underlying cause, often unknown at first, of one or more incidents."
      },
      {
       "term": "Priority",
       "def": "The relative importance of a ticket, usually derived from impact and urgency."
      },
      {
       "term": "SLA",
       "def": "Service level agreement: agreed targets for responding to and resolving tickets."
      },
      {
       "term": "First contact resolution",
       "def": "The share of tickets resolved during the user's first contact with the service desk."
      },
      {
       "term": "Knowledge base",
       "def": "A searchable library of articles that explain fixes and procedures for users and support staff."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Classify work correctly: incident, service request, problem or change.",
      "Priority comes from impact and urgency, never from seniority alone.",
      "SLA targets, FCR and compliance turn service quality into numbers you can improve.",
      "Write ticket notes a stranger could act on at 2 am.",
      "AI assistants can draft and summarise, but a person verifies before anything is sent or changed."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A user asks for access to the marketing shared folder. What type of ticket is this?",
       "options": [
        "Service request",
        "Incident",
        "Problem",
        "Major change"
       ],
       "answer": 0,
       "explain": "Access to an existing resource is a routine service request."
      },
      {
       "q": "Investigating why the VPN drops every afternoon for many users is best tracked as:",
       "options": [
        "A service request",
        "A change",
        "A problem",
        "A purchase order"
       ],
       "answer": 2,
       "explain": "Finding the underlying cause of recurring incidents is problem management."
      },
      {
       "q": "A service desk resolved 900 of 1,000 tickets within SLA. What is its SLA compliance?",
       "options": [
        "90%",
        "9%",
        "100%",
        "10%"
       ],
       "answer": 0,
       "explain": "900 / 1,000 x 100 = 90%."
      },
      {
       "q": "A single user's app crashes but a web version works. What priority fits best?",
       "options": [
        "P3 or P4",
        "P1 Critical",
        "P2 High",
        "No ticket needed"
       ],
       "answer": 0,
       "explain": "Low impact with a workaround is medium or low priority."
      },
      {
       "q": "Which ticket note is most useful to a colleague?",
       "options": [
        "'Fixed.'",
        "'Looked at it.'",
        "'User happy.'",
        "'Printer offline: spooler stopped after update; restarted service, test page OK, user confirmed 11:20.'"
       ],
       "answer": 3,
       "explain": "It states symptom, cause, action and confirmation."
      },
      {
       "q": "An AI assistant drafts a reply telling a user to make a registry change and switch off a security tool. What should the technician do?",
       "options": [
        "Send it, since the assistant was trained on the vendor's documentation",
        "Check and test the steps, remove unsafe ones, then send it",
        "Ask the assistant whether its own answer is correct, then send it",
        "Forward it to the user and ask them to judge whether it looks safe"
       ],
       "answer": 1,
       "explain": "The technician owns every reply: verify the steps and remove anything unsafe, such as disabling protection. The assistant cannot check itself, and users cannot judge technical safety."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.exam.push([
 {
  "module": "m1",
  "q": "A finance user's desktop reboots without warning every afternoon when large reports run. Temperatures are normal, the PSU is a 250 W unit and the user recently had a graphics card fitted for a second monitor. What is the most likely cause?",
  "options": [
   "The power supply cannot handle the extra load",
   "A corrupted user profile",
   "The monitor cable is too long",
   "The RAM is running in single-channel mode, which limits report performance"
  ],
  "answer": 0,
  "explain": "Adding a graphics card raised peak demand beyond a small 250 W PSU, so heavy work trips it. Profiles, cable length and channel mode do not cause power-related restarts."
 },
 {
  "module": "m1",
  "q": "A technician is asked why a new laptop with '256 GB' printed on the box shows 238 GB in the operating system. What is the best explanation to give the user?",
  "options": [
   "Part of the drive is reserved for malware protection",
   "The drive is a cheaper, lower-capacity model than the one advertised on the box",
   "The OS shows binary units; the maker uses decimal units",
   "The SSD has already worn out by 7%"
  ],
  "answer": 2,
  "explain": "256 x 10^9 bytes equals about 238 GiB. There is no fraud, wear or hidden malware partition behind the difference."
 },
 {
  "module": "m1",
  "q": "A desktop powers on, its fans spin and the motherboard's CPU LED stays lit. Nothing appears on screen. The CPU was just replaced. What should the technician check first?",
  "options": [
   "That the monitor's input source is set to the correct HDMI port",
   "That the keyboard is plugged in",
   "That the network cable is connected",
   "That the 8-pin CPU power cable is connected"
  ],
  "answer": 3,
  "explain": "The CPU LED points to the processor or its power; a missing 8-pin cable after CPU work is common. Monitor, keyboard and network checks do not explain a CPU POST failure."
 },
 {
  "module": "m1",
  "q": "Students report that a lab PC's clock is wrong every morning and firmware settings revert to defaults. What is the most efficient fix?",
  "options": [
   "Reinstall the operating system",
   "Replace the motherboard",
   "Connect the PC to a UPS so it never loses mains power",
   "Replace the CMOS coin-cell battery"
  ],
  "answer": 3,
  "explain": "A flat CMOS battery loses settings and time when mains power is off overnight. Reinstalling, replacing the board or adding a UPS do not address the cause cheaply."
 },
 {
  "module": "m1",
  "q": "A label printer on a pharmacy counter prints labels that are very faint after the media supplier changed. The printer has no ribbon installed. What should be checked first?",
  "options": [
   "Whether the new labels need a ribbon (thermal transfer media)",
   "Whether the network switch port has errors",
   "Whether the print driver is the latest version from the manufacturer's website",
   "Whether the label printer needs a new fuser"
  ],
  "answer": 0,
  "explain": "Direct thermal printers need heat-sensitive labels; thermal transfer media needs a ribbon. The change of media is the obvious variable. Thermal printers have no fuser."
 },
 {
  "module": "m1",
  "q": "A manager wants all twenty office PCs to boot faster. Each has an HDD, 16 GB RAM and a supported CPU. Which upgrade gives the biggest improvement for the money?",
  "options": [
   "An SSD in place of the HDD",
   "A larger power supply",
   "A second monitor",
   "A faster CPU with more cores and cache"
  ],
  "answer": 0,
  "explain": "Replacing an HDD with an SSD transforms boot and app load times. A new CPU costs more for less gain, and a PSU or monitor does not affect boot speed."
 },
 {
  "module": "m1",
  "q": "After a storm, a reception PC in a clinic will not power on at all: no lights, no fans. The wall socket works for a phone charger. What should the technician try next?",
  "options": [
   "Reinstall the operating system from a USB recovery drive and restore files",
   "Check the PSU switch and test with a known-good power cable or PSU",
   "Replace the RAM",
   "Reset the BIOS password"
  ],
  "answer": 1,
  "explain": "No lights or fans means the system is not receiving power; the PSU and its cable are the next link to test. RAM, OS and passwords matter only once the system powers up."
 },
 {
  "module": "m1",
  "q": "A technician needs to upgrade RAM in a small form factor PC but is unsure of the type supported. What is the best way to confirm before buying?",
  "options": [
   "Check the specification and query the current modules",
   "Buy DDR5 because it is backwards compatible",
   "Ask the user which RAM they prefer",
   "Buy the largest module available and test whether the PC accepts it"
  ],
  "answer": 0,
  "explain": "The manual and an inventory query show the exact type, speed and slots. DDR5 is not backwards compatible, users rarely know, and trial purchases waste money."
 },
 {
  "module": "m2",
  "q": "A user's Windows laptop crashes with a blue screen every morning since a printer driver was installed yesterday. The user needs the laptop urgently. What should the technician do first?",
  "options": [
   "Reset the PC, reinstall all apps and restore the user's files",
   "Replace the system SSD",
   "Disable automatic updates",
   "Boot into safe mode and roll back or remove the new driver"
  ],
  "answer": 3,
  "explain": "The change that coincides with the fault is the new driver, and safe mode lets you remove it with minimal disruption. Resetting is excessive, hardware is not implicated and disabling updates creates risk."
 },
 {
  "module": "m2",
  "q": "A Linux server's application log says 'Permission denied' when writing to /var/app/data. The service runs as appuser, and the folder is owned by root with mode 755. What is the most appropriate fix?",
  "options": [
   "chmod -R 777 /var/app",
   "Give appuser (or its group) write access to that folder only",
   "Run the service as root",
   "Delete /var/app/data and recreate it while logged in as a regular user"
  ],
  "answer": 1,
  "explain": "Granting the service account just the access it needs follows least privilege. 777 and running as root expose the system, and recreating the folder randomly does not define correct ownership."
 },
 {
  "module": "m2",
  "q": "An analyst must copy a 12 GB database export to a USB drive that will be read on both a Windows PC and a Mac. The copy fails although there is space. Which action solves it?",
  "options": [
   "Split the export into two smaller ZIP files and keep FAT32",
   "Back up the drive and reformat it as exFAT",
   "Format it as ext4",
   "Rename the file with a shorter name"
  ],
  "answer": 1,
  "explain": "FAT32 cannot hold files over 4 GB; exFAT can and is read-write on both systems. ext4 is not natively supported, renaming does nothing and splitting adds needless complexity."
 },
 {
  "module": "m2",
  "q": "A technician must install the same OS and 12 standard apps on 40 new laptops this week. Which approach is best?",
  "options": [
   "Install each laptop manually from the vendor's website",
   "Ask each user to install what they need",
   "Deploy a tested standard image or automated provisioning",
   "Copy the hard drive of one existing user's laptop to all others"
  ],
  "answer": 2,
  "explain": "A tested standard build deployed automatically is fast and consistent. Manual or user installs drift, and cloning a user's disk spreads their personal data and problems."
 },
 {
  "module": "m2",
  "q": "Event Viewer shows repeated disk warnings on a PC that has started freezing for a few seconds at a time. What should the technician do next?",
  "options": [
   "Ignore the warnings because the PC still boots and works most of the time",
   "Run a registry cleaner",
   "Increase the screen resolution",
   "Check drive health, back up data and plan a replacement"
  ],
  "answer": 3,
  "explain": "Disk warnings plus freezes suggest a failing drive, so protect data and verify health. Ignoring it risks data loss, and registry cleaners and display settings are irrelevant."
 },
 {
  "module": "m2",
  "q": "A company-owned iPhone used by a field engineer is reported lost in a taxi. It is enrolled in MDM. What should happen first?",
  "options": [
   "Wait a week before acting",
   "Order a replacement phone and restore the engineer's apps on it",
   "Remote-lock it with a contact message; wipe if not recovered",
   "Change the office Wi-Fi password"
  ],
  "answer": 2,
  "explain": "Locking first protects data while allowing recovery; wiping follows if it stays lost. Waiting is risky and the other options do not protect the device's data."
 },
 {
  "module": "m2",
  "q": "In late 2026 a company still has 60 Windows 10 PCs and bought no Extended Security Updates. Twenty of them fail the Windows 11 check only because TPM and Secure Boot are switched off in firmware. What should the support team do first for those twenty?",
  "options": [
   "Enable firmware TPM and Secure Boot, recheck, then pilot the upgrade",
   "Replace all 60 PCs at once, since none of them can be trusted any more",
   "Keep them on Windows 10 because they still boot and work normally",
   "Turn off the update service so the old version stays stable"
  ],
  "answer": 0,
  "explain": "These twenty only need a firmware setting before a normal, piloted upgrade, which ends their unpatched state quickly. Replacing everything wastes money, staying on Windows 10 leaves known holes open and blocking updates makes it worse."
 },
 {
  "module": "m3",
  "q": "A PC shows IPv4 address 192.168.40.130/25 and default gateway 192.168.40.1. The user can reach a printer at 192.168.40.140 but nothing else. What is wrong?",
  "options": [
   "The DNS server is unreachable",
   "The printer is blocking traffic",
   "The gateway is outside the PC's subnet (192.168.40.128-255)",
   "The subnet mask should be /16 so that all addresses are local"
  ],
  "answer": 2,
  "explain": "A /25 starting at .128 covers .128-.255, so .1 is not on the local subnet and cannot be used as the gateway. DNS, the printer and a /16 mask are not the cause."
 },
 {
  "module": "m3",
  "q": "After a power cut, several new laptops in a training room get 169.254.x.x addresses, while existing PCs keep working. The DHCP scope is 192.168.5.100-192.168.5.150 with 8-day leases. What is the most likely cause?",
  "options": [
   "The DNS server is down",
   "The DHCP scope is exhausted",
   "The switches are broken",
   "The laptops need IPv6 disabled"
  ],
  "answer": 1,
  "explain": "Existing PCs keep their leases, while new devices cannot get one because the small scope with long leases has run out. Broken switches or DNS would affect everyone."
 },
 {
  "module": "m3",
  "q": "A user can open websites by IP address but not by name. Other users are fine. `ipconfig /all` shows a manually entered DNS server address from a previous job. What should be done?",
  "options": [
   "Set DNS to automatic and flush the DNS cache",
   "Reset the internet router",
   "Increase the DHCP lease time so the PC keeps its address",
   "Replace the network card"
  ],
  "answer": 0,
  "explain": "The user's static, outdated DNS setting is the fault; returning to automatic DNS from DHCP and clearing the cache fixes it. The router, lease time and hardware are working."
 },
 {
  "module": "m3",
  "q": "Staff in a corner office complain that Wi-Fi calls break up. Their laptops connect on 2.4 GHz channel 3 with a signal of -79 dBm. What is the best improvement?",
  "options": [
   "Rename the SSID",
   "Switch the network to WEP encryption to reduce the protocol overhead",
   "Increase DHCP lease time",
   "Add or relocate an access point and use 5 GHz on a clean channel"
  ],
  "answer": 3,
  "explain": "Weak signal on an overlapping 2.4 GHz channel causes drops; better coverage and a cleaner band address the cause. SSID names and leases do not affect radio quality, and WEP is insecure."
 },
 {
  "module": "m3",
  "q": "A web application on 10.10.5.20 does not load for users. Ping to the server succeeds. What is the most useful next test?",
  "options": [
   "ipconfig /release",
   "arp -d *",
   "Restart every user's PC and clear their browser caches",
   "Test-NetConnection 10.10.5.20 -Port 443"
  ],
  "answer": 3,
  "explain": "Ping proves IP reachability; a port test shows whether the HTTPS service is reachable and listening. Releasing addresses, clearing ARP or restarting PCs do not test the service."
 },
 {
  "module": "m3",
  "q": "A small office owner wants to view the office CCTV recorder from home and asks you to forward its web port on the router. What should you recommend?",
  "options": [
   "Use a VPN or secure remote-access service instead",
   "Forward the port and keep the default admin password",
   "Forward the port but change it to a high number",
   "Disable the router firewall when he needs access"
  ],
  "answer": 0,
  "explain": "Exposing a recorder to the internet invites attacks; a VPN or secure remote service avoids it. Changing the port number is not real protection and disabling the firewall is worse."
 },
 {
  "module": "m3",
  "q": "A website moved to a new IP address an hour ago. Most staff see the new site, but some still reach the old server. What explains this, and what is the quick fix for affected PCs?",
  "options": [
   "Cached DNS answers persist; flush DNS on those PCs",
   "The subnet mask is wrong; change it",
   "The DHCP scope is full; extend the scope and renew all leases",
   "The website uses UDP; open the port"
  ],
  "answer": 0,
  "explain": "Cached records last until their TTL expires; flushing the client cache forces a fresh lookup. Masks, DHCP and transport protocols are unrelated."
 },
 {
  "module": "m3",
  "q": "Traceroute from a branch PC to a head-office server stops after the branch router, while internet sites work normally. What should the support specialist do?",
  "options": [
   "Reinstall the PC's network driver and then the operating system",
   "Escalate to the network team with the test evidence",
   "Change the PC's DNS servers",
   "Replace the user's patch cable"
  ],
  "answer": 1,
  "explain": "The evidence shows the path breaks beyond the branch router, which is network-team territory. PC reinstall, DNS changes and cabling are disproven by working internet access."
 },
 {
  "module": "m4",
  "q": "A user reports that a spreadsheet macro stopped working today. Before changing anything, what should the support specialist do first?",
  "options": [
   "Reinstall the office suite",
   "Escalate to the application vendor",
   "Ask what changed, who else is affected and capture the error",
   "Restore the spreadsheet from last month's backup to undo any damage"
  ],
  "answer": 2,
  "explain": "Identifying the problem through facts, scope and recent changes comes first. Reinstalling, escalating or restoring old data are actions taken before you know the cause."
 },
 {
  "module": "m4",
  "q": "A technician changes the DNS server, the proxy setting and the network driver on a PC at the same time, and the problem disappears. What is the main weakness of this approach?",
  "options": [
   "It took too long",
   "The cause stays unknown and extra changes may add new faults",
   "It needed manager approval",
   "It should have been done remotely so the user was not disturbed"
  ],
  "answer": 1,
  "explain": "Changing one variable at a time shows which change fixed the issue; multiple changes hide the cause and can introduce new faults. Time, approval and location are not the core issue."
 },
 {
  "module": "m4",
  "q": "At 09:00 three tickets arrive: the payroll system is down for the finance team on payday; a manager wants a new keyboard; a user's wallpaper reset after an update. Which order is best?",
  "options": [
   "Keyboard, wallpaper, payroll",
   "Wallpaper, payroll, keyboard",
   "All three in the order received",
   "Payroll, keyboard, wallpaper"
  ],
  "answer": 3,
  "explain": "Payroll on payday has the highest impact and urgency; the routine requests follow. Ordering by arrival or ease ignores business impact."
 },
 {
  "module": "m4",
  "q": "An employee gets a phone call from someone claiming to be IT support, asking them to install a remote-access program to 'fix a virus'. The employee did not log a ticket. What should the employee do?",
  "options": [
   "Install it and watch carefully",
   "Decline, end the call and report it to IT",
   "Ask for the caller's name and then install it",
   "Give the caller their password instead"
  ],
  "answer": 1,
  "explain": "Unsolicited remote-support calls are a common scam; staff should refuse and report. Watching, asking for a name or sharing a password still hands control to the caller."
 },
 {
  "module": "m4",
  "q": "The VPN drops for about 40 users every weekday at 14:00. The desk has been reconnecting users individually for two weeks. What should happen next?",
  "options": [
   "Raise a problem record to investigate the root cause",
   "Keep resolving each incident individually as users report it",
   "Tell users to avoid the VPN after lunch",
   "Close the tickets as 'user error'"
  ],
  "answer": 0,
  "explain": "Recurring incidents with a pattern call for problem management to find and remove the cause. Repeating fixes, workarounds or blaming users leave the cause in place."
 },
 {
  "module": "m4",
  "q": "A frustrated user shouts that IT 'never fixes anything'. Their laptop cannot connect to the projector before a client pitch in ten minutes. What is the best response?",
  "options": [
   "Ask them to calm down before you continue",
   "Explain that projectors are the facilities team's responsibility, not IT's",
   "Acknowledge the deadline, try quick fixes and offer a backup device",
   "Promise a full investigation next week"
  ],
  "answer": 2,
  "explain": "Empathy plus immediate action and a workaround protects the meeting. Telling people to calm down, deflecting or deferring helps no one."
 },
 {
  "module": "m4",
  "q": "Which ticket note best supports a colleague who takes over a ticket overnight?",
  "options": [
   "'Checked network. Still broken.'",
   "'User says it is slow. Will look later.'",
   "'Gateway ping OK; DNS resolves; TCP 443 to erp.company.com fails since 08:40; firewall team notified at 09:10, awaiting reply.'",
   "'Escalated.'"
  ],
  "answer": 2,
  "explain": "It gives tests, results, timing and next step, so no one repeats work. The others lack evidence and status."
 }
]);
