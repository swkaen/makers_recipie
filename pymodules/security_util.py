import hashlib

def generate_hash(raw_string):
    hash_data = hashlib.sha256(raw_string.encode('utf-8')).hexdigest()
    return hash_data

def eval_hash(hash_data1, hash_data2):
    if hash_data1==hash_data2:
        return True
    else:
        return False

if __name__=='__main__':
    hash_data1 = generate_hash('test')
    hash_data2 = generate_hash('test')
    print(eval_hash(hash_data1, hash_data2))

