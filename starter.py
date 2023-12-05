import subprocess
import os

# Change to the directory of the first project
os.chdir(r'C:\Users\Xenon\OneDrive\Desktop\B211900031\BD\biy_daalt')

# Start the first npm command in a separate process without waiting for it to complete
subprocess.Popen('npm start', shell=True)

# Change to the directory of the second project
os.chdir(r'C:\Users\Xenon\OneDrive\Desktop\B211900031\BD\back')

# Start the second npm command in a separate process without waiting for it to complete
subprocess.Popen('npm run dev', shell=True)
