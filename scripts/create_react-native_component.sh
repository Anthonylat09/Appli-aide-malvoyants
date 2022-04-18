# Create ReactNative Component
# by Jimmy Trackoen

#!bin/bash

echo "## CREATE REACT_NATIVE COMPONENT ##"
read -p "Enter the name of your component : " COMPONENT_NAME

# CREATE FOLDER IF NOT EXIST 
mkdir -p $PWD/components
echo ""
echo "Create folder components if this folder not exists.."
echo ""

# CREATE FILE IN FOLDER IF NOT EXIST
COMPONENT_FILE="$PWD/components/$COMPONENT_NAME.js"

echo "Check if file $COMPONENT_FILE exists.."

# FILL FOLDER
if [ ! -f $COMPONENT_FILE ]; then
  touch $COMPONENT_FILE
  echo "Create file $COMPONENT_FILE.."
  echo ""

  # INSERT CLASS IN FILE $COMPONENT_FILE #
  echo "import React from 'react';" >> $COMPONENT_FILE
  echo "import { StyleSheet, Text, View } from 'react-native';" >> $COMPONENT_FILE
  echo "" >> $COMPONENT_FILE
  echo "class $COMPONENT_NAME extends React.Component {" >> $COMPONENT_FILE
  echo "    constructor(props){" >> $COMPONENT_FILE
  echo "        super(props)" >> $COMPONENT_FILE
  echo "                    " >> $COMPONENT_FILE
  echo "        /* REMEMBER USE this.setState for update THIS  */" >> $COMPONENT_FILE
  echo "        this.state = {" >> $COMPONENT_FILE
  echo "            text: 'Hello from'" >>  $COMPONENT_FILE
  echo "        }" >>  $COMPONENT_FILE
  echo "    }" >> $COMPONENT_FILE
  echo "" >> $COMPONENT_FILE
  echo "    render(){" >> $COMPONENT_FILE
  echo "        return (" >> $COMPONENT_FILE 
  echo "            <View>" >> $COMPONENT_FILE
  echo "                <Text style={styles.text}>{this.state.text} $COMPONENT_NAME component</Text>" >> $COMPONENT_FILE
  echo "            </View>" >> $COMPONENT_FILE
  echo "        )" >> $COMPONENT_FILE
  echo "    }" >> $COMPONENT_FILE
  echo "}" >> $COMPONENT_FILE
  echo "" >> $COMPONENT_FILE
  echo "const styles = StyleSheet.create({" >> $COMPONENT_FILE
  echo "    text: {" >> $COMPONENT_FILE
  echo "      backgroundColor: \"blue\"," >> $COMPONENT_FILE
  echo "      color: \"white\"," >> $COMPONENT_FILE
  echo "      fontSize: 20" >> $COMPONENT_FILE
  echo "    }," >> $COMPONENT_FILE
  echo "});" >> $COMPONENT_FILE
  echo "" >> $COMPONENT_FILE
  echo "export default $COMPONENT_NAME" >> $COMPONENT_FILE
  # END INSERTION SECTION #
  
  echo "Fill file $COMPONENT_FILE with component value.."
  echo ""
  echo "Component $COMPONENT_NAME successfull created !"
  echo ""
else
  echo ""
  echo "The component $COMPONENT_FILE already exist.."
  echo ""
  exit 1
fi

echo "End of program.."
exit 0
