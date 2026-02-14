<p align="center">
  <img src="https://github.com/user-attachments/assets/ea43556c-a7ae-4e13-b869-b8fd9487443a" alt="Project Banner" width="100%">
</p>

# SheBuilds 🎯

### Team Name: 404 valentine not found

### Team Members
- Member 1: Fayhaa Fathima A V- Kannur University
- Member 2: Shaza Jabbar - Kannur University

### Hosted Project Link
https://fayyhafaath.github.io/hackathon/

### Project Description
Many women have innovative ideas but lack structured guidance to validate them.SheBuilds is an AI-powered startup validation platform designed specifically for aspiring female founders.
Users input their startup idea,and our AI analyzes problem clarity,target market strength,monetization feasibilt,and scalability.
Instead of overwhelming jargon,we provide a clear score and actionable steps.Our vision is to democratize startup validation and increase women-led ventures globally.

### The Problem statement
Many women entrepreneurs have ideas but dont know if its market ready, dont know how to validate , dont understand MVP concept.

### The Solution
An AI-powered system that analyzes user-submitted ideas and evaluates them based on problem clarity, market potential, monetization feasibility, and scalability. It provides a simple score along with clear, actionable insights to help users refine their concepts and make informed decisions. By offering structured guidance in an easy-to-understand format, the solution enables individuals to validate ideas confidently and move forward with stronger, more viable plans.


---


### Technologies/Components Used

**For Software:**
- Languages used: html,js,css
- Frameworks used: React
- Tools used: VS Code, Git



## Features

List the key features of your project:
-  AI analyse:
- market problem clarity
- target audience
- monetization strength
- competitor presence
- improvement suggestion

---

## Implementation


### For Software:

#### Installation
```bash
[Installation commands - e.g., npm install, pip install -r requirements.txt]
```

#### Run
```bash
[Run commands - e.g., npm start, python app.py]
```

### For Hardware:

#### Components Required
[List all components needed with specifications]

#### Circuit Setup
[Explain how to set up the circuit]

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

<img width="1873" height="891" alt="image" src="https://github.com/user-attachments/assets/d2a1e70d-182c-462e-837f-90b0087651fd" />


<img width="1703" height="862" alt="image" src="https://github.com/user-attachments/assets/0589b47e-8624-4cf7-8e51-5e117192e982" />


<img width="1881" height="691" alt="image" src="https://github.com/user-attachments/assets/1a01e897-5b8b-47a9-ab58-80d0fe8da541" />


<img width="1433" height="889" alt="image" src="https://github.com/user-attachments/assets/a8603655-7de2-4b54-9b0a-9bb389dde4d1" />



#### Diagrams

**System Architecture:**

![Architecture Diagram](docs/architecture.png)
*Explain your system architecture - components, data flow, tech stack interaction*

**Application Workflow:**
User Inputs Idea
↓
Frontend sends request to Backend
↓
Backend receives data
↓
AI analyzes idea (clarity, market, monetization, scalability)
↓
Backend formats response + score
↓
Frontend displays results + suggestions
↓
User reviews feedback and improves idea

---

### For Hardware:

#### Schematic & Circuit

![Circuit](Add your circuit diagram here)
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

#### Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://api.yourproject.com`

##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
https://drive.google.com/file/d/1xidLVb4NNmSgbogKeDlX8-PUihMHiE89/view?usp=drive_link

working process

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:**  ChatGPT, Claude 

**Purpose:** 
-  Debugging assistance 
-  Code review and optimization suggestions


**Human Contributions:**
- documentation
- design planning
- idea

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- Fayhaa Fathima : backend development
- Shaza Jabbar   : frontend development


---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
