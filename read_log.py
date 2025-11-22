import json

def read_jsonl_file(file_path):
    with open(file_path, 'r') as f:
        for line in f:
            try:
                json_data = json.loads(line)
                print(json.dumps(json_data, indent=2))  # Pretty print JSON
            except json.JSONDecodeError as e:
                print(f"Error decoding JSON from line: {line.strip()} - {e}")

if __name__ == "__main__":
    log_file_path = r"C:\Users\cvras\OneDrive\SKOLE høst2025\IBE160 - Programmering med KI\SG-Nettgrupp1\.logging\log.jsonl"
    read_jsonl_file(log_file_path)