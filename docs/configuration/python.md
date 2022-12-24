---
title: Python 3 Configuration 
---

# Python 3 Configuration
-------
## On system $PATH
Python 3 is automatically usable by TerosHDL if it's on your system \$PATH, no additional configuration is required.

## Custom Path

:::tip Not the same as custom paths for integrations

specify the path to the python binary itself, not the directory

:::

Example custom path for Linux users:
 `/home/teroshdl/custom/python3`

Example custom path for Windows users:
 ```pwsh
 C:\Users\Ron\AppData\Local\Programs\Python\Python37-32
 ```

:::tip 

Be careful with blank spaces

:::

# Example with Anaconda

```terminal
conda activate my_en; python
```

:::warning Windows users

 replace \';\' with \'&\'

:::

# Example with virtualenv

'''
`. .venv/bin/activate; python`
'''

:::warning Windows users

 replace \';\' with \'&\' for this command as well

:::