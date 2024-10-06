mkdir docs
cd docs

# Create the folder structure
mkdir -p requirements design wireframes development code-samples

# Create the documentation index file
touch documentation-index.md
echo "# Central directory to navigate all FlyBrief documents" > documentation-index.md

# Create requirement files
touch requirements/ux-requirements.md
echo "# User experience requirements (dockable UI and interaction patterns)" > requirements/ux-requirements.md

touch requirements/functional-requirements.md
echo "# Functional requirements (header, panels, image selection)" > requirements/functional-requirements.md

touch requirements/non-functional-requirements.md
echo "# Non-functional requirements (performance, security)" > requirements/non-functional-requirements.md

touch requirements/data-structure.md
echo "# Overview of the data structure for FlyBrief" > requirements/data-structure.md

# Create design folder files
touch design/ui-flow-diagram.md
echo "# User interaction flows and navigation" > design/ui-flow-diagram.md

touch design/interaction-design.md
echo "# Interaction details like drag-and-drop image reordering" > design/interaction-design.md

# Create wireframe folder and file
mkdir -p design/wireframes
touch design/wireframes/dockable-panels-wireframe.png

# Create development folder files
touch development/dockable-ui-framework-specs.md
echo "# Specifications for the dockable UI framework" > development/dockable-ui-framework-specs.md

touch development/data-handling-design.md
echo "# Design for handling data (loading/export)" > development/data-handling-design.md

touch development/api-endpoints.md
echo "# API endpoint structure for data interaction" > development/api-endpoints.md

# Create code-sample folder files
touch code-samples/load_data_structure.json
echo '{ "example_key": "example_value" }' > code-samples/load_data_structure.json

touch code-samples/export_data_structure.json
echo '{ "example_key": "example_value" }' > code-samples/export_data_structure.json

touch code-samples/framework_code_structure.txt
echo "# Text-based code structure for the dockable UI framework" > code-samples/framework_code_structure.txt

touch code-samples/api_endpoint_structure.txt
echo "# Text-based structure for API endpoints" > code-samples/api_endpoint_structure.txt
