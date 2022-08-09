function checkCredit(stringCredit) {

    const credit = parseInt(stringCredit);

    if(credit >= 0){
        return true;
    }
    else{
        return false;
    }
}

function setName(first_name, last_name){

    let name = '';

    if(first_name != undefined ){
        name+= first_name;
    }
    if(last_name != undefined){
        
        if (!name){
            name += last_name;
        }
        else{
            name= name + ' ' + last_name;
        }
    }

    return name;

}

function setNoteSubj(note, subject){

    console.log('setNoteSubj');

    let NoteSubj = '';
    if(note!= undefined){
        NoteSubj = 'Note: ' + note;
    }
    if(subject != undefined){
        if(!NoteSubj){
            NoteSubj = 'Subject: ' + subject;
        }
        else{
            NoteSubj = ' ' + 'Subject: ' + subject;
        }
    }
    console.log('setNoteSubj2');
    return NoteSubj;
}


module.exports = {checkCredit, setName, setNoteSubj};