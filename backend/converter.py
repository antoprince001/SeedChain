
from tika import parser # pip install tika
raw = parser.from_file('seedChain.pdf')
print(raw['content'])
