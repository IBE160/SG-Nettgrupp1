import re
import os

# Get the absolute path to the project root directory
project_root = os.path.dirname(os.path.abspath(__file__))

# Construct the full path to the reflection report, which is in the root
file_path = os.path.join(project_root, 'reflection-report.md')

# Define the pattern to find the word count line
# It looks for '**Ordantall:**' followed by spaces and one or more digits.
pattern = re.compile(r'(\*\*Ordantall:\*\*\s*)(\d+)')

try:
    # Read the entire content of the file
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Create a version of the content for counting, with the word count line removed
    # This prevents the script from counting its own output
    content_for_counting = pattern.sub('', content)

    # Count words by splitting the text by whitespace
    word_count = len(content_for_counting.split())

    # Check if the pattern was found in the file
    if pattern.search(content):
        # Replace the old word count with the new one using a raw string for substitution
        new_content = pattern.sub(fr'\g<1>{word_count}', content)

        # Write the updated content back to the file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(f'Successfully updated word count to {word_count} in {os.path.basename(file_path)}')
    else:
        print(f'Error: Could not find the placeholder line in the file.')
        print(f'Please ensure the file contains a line like: **Ordantall:** 0')

except FileNotFoundError:
    print(f"Error: The file was not found at {file_path}")
except Exception as e:
    print(f"An unexpected error occurred: {e}")