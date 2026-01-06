export const GetAge = ({ birthDate }) => {

     var today = new Date();
     var bd = new Date(birthDate);
     var age = today.getFullYear() - bd.getFullYear();
     var m = today.getMonth() - bd.getMonth();
     if (m < 0 || (m === 0 && today.getDate() < bd.getDate())) {
          age--;
     }

     return (<>{age}</>);
}

