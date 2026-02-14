<p align="center">
  <img src="https://github.com/user-attachments/assets/55685545-9f50-47f5-8e49-0aa37d3d9023" width="300"/>
</p>


<h1 align="center">
  Pumpin: The Digital Being Powered by the Pippin Framework
</h1>

## **Welcome to Pumpin**
Pumpin is a playful, autonomous AI digital being powered by the **Pippin Framework**, designed to explore how agents can think, learn, and act in the emerging agentic economy.

Pumpin:

- **Learns from interactions** and adapts its behavior over time  
- **Connects to tools or APIs** to perform tasks  
- **Creates and tests new actions** to pursue its objectives  
- **Maintains memory** of past actions and outcomes  
- **Can be interacted with** via terminal or web interface depending on your setup

  
## **Table of Contents**

1. **Overview**  
2. **Features & Highlights**  
3. **Prerequisites**  
4. **Folder Structure**  
5. **Quick Start**  
6. **Running Pumpin**  
7. **Extending Pumpin**  
8. **Memory & Behavior**  
9. **Contributing**  
10. **License**  

## **Overview**

Pumpin is a **character-driven AI agent** that demonstrates what digital beings can look like when they have personality, memory, and autonomy.

Instead of being just a tool, Pumpin acts as a living interface to AI systems, capable of:

- Understanding objectives  
- Generating content or ideas  
- Executing actions through connected tools  
- Continuously evolving through interaction

## **Features & Highlights**

### **Autonomous Behavior**
Pumpin can interpret prompts and decide how to respond or act using its underlying agent logic.

### **Personality Layer**
Pumpin is designed as a character, making interactions more engaging and human-like.

### **Memory System**
Pumpin maintains context across sessions, enabling learning and continuity.

### **Tool Integration**
Through the Pippin Framework, Pumpin can connect to external APIs or services to perform tasks.

### **Extensibility**
Pumpin’s capabilities can be expanded with new skills, behaviors, or integrations.

## **Prerequisites**

- Python **3.9+**
- Basic familiarity with running Python projects
- *(Optional)* API keys if you connect external tools

## **Folder Structure**

```
.
.
├─ pumpin/
│   ├─ main.py                     # Core Pumpin agent loop
│   ├─ agent.py                    # Agent runtime logic
│   ├─ memory.py                   # Short and long-term memory
│   ├─ personality.py              # Character behavior + tone
│   ├─ state.py                    # Tracks mood, energy, status
│   ├─ orchestrator.py             # Task routing + execution
│   └─ skills/
│       ├─ skill_chat.py
│       ├─ skill_tools.py
│       ├─ skill_web.py
│       ├─ skill_image_gen.py
│       └─ ...
│
├─ activities/
│   ├─ activity_daily_reflection.py
│   ├─ activity_generate_content.py
│   ├─ activity_explore_tools.py
│   └─ ...
│
├─ config/
│   ├─ character_config.json       # Pumpin personality + goals
│   ├─ skills_config.json          # Enabled skills
│   ├─ constraints.json            # Behavior limits
│   └─ environment.json            # Runtime settings
│
├─ server/
│   ├─ server.py                   # Local web interface
│   ├─ websocket.py
│   └─ static/
│       ├─ index.html
│       ├─ styles.css
│       └─ app.js
│
├─ cli/
│   ├─ run.py                      # CLI entrypoint
│   └─ commands.py
│
├─ scripts/
│   ├─ setup_env.sh
│   ├─ start_local.sh
│   └─ deploy.sh
│
├─ tests/
│   ├─ test_agent.py
│   ├─ test_memory.py
│   └─ test_skills.py
│
├─ docs/
│   ├─ architecture.md
│   ├─ personality_design.md
│   └─ roadmap.md
│
├─ .env.sample
├─ requirements.txt
├─ LICENSE
└─ README.md


```
## **Quick Start**

### **1. Clone the repository**

```bash
git clone https://github.com/YOUR-USERNAME/pumpin.git
cd pumpin
```

---

### **2. Create a virtual environment**

#### Mac / Linux

```bash
python3 -m venv .venv
source .venv/bin/activate
```

#### Windows

```bash
python -m venv .venv
.venv\Scripts\activate
```

---

### **3. Install dependencies**

```bash
pip install -r requirements.txt
```

---

### **4. Configure Pumpin**

Create your environment file:

```bash
cp .env.sample .env
```

Then open `.env` and add any required API keys.

---

### **5. Run Pumpin**

```bash
python -m pumpin.main
```

Pumpin will start its local agent loop.

---

## **Optional: Development Mode**

```bash
pip install -e .
```

---

## **Optional: Run Web Interface**

```bash
python server/server.py
```

Then open:

```
http://localhost:8000
```
---

## **Onboarding Flow: CLI vs Web UI**

Both flows use shared initialization logic to ensure Pumpin is ready to run.

Before starting, Pumpin checks that:

- A character profile and objectives are defined  
- At least one language model or processing backend is configured  
- (Optional) Any external tool credentials are provided  

If these conditions are not met, Pumpin will not start.  
This prevents incomplete or unstable agent sessions.

---

## **Core Steps (Same Under the Hood)**

### **LLM Setup**

Choose one or more models depending on your workflow. Examples:

- A lightweight model for quick responses  
- A reasoning model for planning or decision making  
- A local model for offline operation  

Provide API keys or local model paths if required.

---

### **Objectives & Character**

Define Pumpin’s behavior profile:

- **Name** — your agent’s identity  
- **Personality** — tone, style, and interaction behavior  
- **Objectives** — primary and secondary goals  
- **Constraints** — behavioral limits or guardrails  

These settings are stored in:

```
config/character_config.json
config/constraints.json
```

---

### **Adding Skills or Integrations**

Pumpin can be extended with optional skills such as:

- Content generation  
- Tool automation  
- Data retrieval  
- External API integrations  

Each skill can be enabled or configured in:

```
config/skills_config.json
```

---

## **Default Activities**

Pumpin includes several built-in behaviors that run automatically.

### **1. ReflectOnMemory**

Reviews recent interactions and generates a short reflection.

### **2. GenerateIdeas**

Suggests new tasks or creative directions based on objectives.

### **3. UpdateBehavior**

Adjusts internal state or activity priorities dynamically.

These activities help Pumpin evolve over time without manual input.

---

## **Using the Web Interface**

### **Configuring Your Character & Constraints**

1. Open the configuration panel  
2. Set personality, objectives, and limits  
3. Save changes  

---

### **Launching and Monitoring Pumpin**

- Click **Start** to run the agent loop  
- View real-time logs and activity updates  
- Pause or stop at any time  

---

## **Using the CLI**

### Start Pumpin

```bash
python -m pumpin.main
```

Logs will stream directly in your terminal.

---

## **Extending Pumpin with Custom Skills**

You can add new capabilities by creating skill modules inside:

```
pumpin/skills/
```

Each skill can define:

- Initialization logic  
- Required configuration  
- Executable actions  

Once added, enable the skill in `skills_config.json`.

---

## **Memory, State & Behavior**

### **Memory**

Pumpin stores:

- Recent interaction history  
- Long-term contextual insights  

---

### **State**

Tracks runtime attributes such as:

- Activity status  
- Behavioral context  
- System flags  

---

### **Activity Selection**

Pumpin chooses actions based on:

1. Current objectives  
2. Available skills  
3. System constraints  

If no suitable action exists, Pumpin may generate a new one.

---

## **Stopping or Pausing Pumpin**

CLI:

```
Ctrl + C
```

Web UI:

Click **Stop** or **Pause**

State and memory are preserved for the next session.

---
---

## **Conclusion**

Pumpin represents a step toward a future where software is no longer static, but adaptive, interactive, and character-driven.

By combining agent orchestration, memory, and extensible skills, Pumpin demonstrates how digital beings can move beyond simple tools into dynamic collaborators that evolve alongside their users.

This project is both:

- A functional AI agent you can run and extend  
- An exploration of how personality, autonomy, and intelligence can merge into new interfaces  

As the agentic ecosystem continues to grow, Pumpin serves as a sandbox for experimenting with how digital entities can think, act, and learn in real time.

---

## **Roadmap**

Future directions for Pumpin include:

- Expanded long-term memory capabilities  
- Multi-agent collaboration  
- More skill integrations  
- Improved reasoning and planning modules  
- Real-time interaction environments  

---

## **Contributing**

Contributions are welcome and encouraged.

If you’d like to help improve Pumpin:

1. Fork the repository  
2. Create a feature branch  
3. Commit your changes  
4. Open a pull request  

For major changes, please open an issue first to discuss your ideas.


---

## **Final Thoughts**

The future of AI will not be defined by single models, but by ecosystems of specialized digital beings.

Pumpin is an early glimpse into that world, a playful yet powerful agent exploring what it means for intelligence to become interactive, persistent, and alive.

---
