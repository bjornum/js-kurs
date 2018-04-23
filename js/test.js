var byggningst{
    var bilde = 'bildelokasjon';
    var beskrivelse ='lorem ipsum';
    var stykkliste = ['item1', 'item2','item3'];
    var signatur ='my name is, Hi';
}

function moo(p1){
    retval= p1 -1
    if (p1 === 0 || p1<0){
        return "finished";
    }else{
    moo(retval)
    }
}