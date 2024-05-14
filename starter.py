import subprocess
import os

# Change to the directory of the first project
os.chdir(r'biy_daalt')

# Start the first npm command in a separate process without waiting for it to complete
subprocess.Popen('npm start', shell=True)

# Change to the directory of the second project
os.chdir(r'back')

# Start the second npm command in a separate process without waiting for it to complete
subprocess.Popen('npm run dev', shell=True)
