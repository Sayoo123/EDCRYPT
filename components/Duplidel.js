import { View, Text } from 'react-native'
import React from 'react'

const Duplidel = (str,n) => {
    var index = 0;
    // Traverse through all characters
    for (var i = 0; i < n; i++)
    {

        // Check if str[i] is present before it
        var j;
        for (j = 0; j < i; j++)
        {
            if (str[i] == str[j])
            {
                break;
            }
        }

        // If not present, then add it to
        // result.
        if (j == i)
        {
            str[index++] = str[i];
        }
    }
    var cstring=str.join("").slice(str, index);
 console.log(cstring);
    return cstring;
}

export default Duplidel;