git clone https://github.com/qingyun-wu/automlbenchmark.git --branch flaml-az --depth 1
cd automlbenchmark
# create a Python3 environment
python3 -m venv ./venv
source venv/bin/activate
# install dependency
python -m pip install -r requirements.txt
# test code
python3 runbenchmark.py flaml test
