export function invert_string(str){

    let inverted_string = ''
    
    for (let index = str.length - 1; index >= 0; index--) {
        inverted_string += str[index]
    }
    
    return inverted_string

}


export function replace(str, old_characters, new_character){

    let new_str = ''
    
    for (let character of str) {
        
        let checker_count = 0
        for (let index = 0; checker_count === 0 && index < old_characters.length; index++) {

            if (character === old_characters[index]){

                new_str += new_character
                checker_count++

            }
            
        }
        if (checker_count === 0) {
    
            new_str += character
    
        }

    }
        
    return new_str

}