// utils.js
export const getInitials = (name) => {
    // Split the name into words
    const words = name.split(' ');
    // Get the first letter of each word
    const initials = words.map(word => word.charAt(0).toUpperCase()).join('');
    // Return only the first two characters
    return initials.substring(0, 2);
  };
  

export const formatDateToAMPM = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert midnight (0) to 12
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedTime = formattedHours + ':' + formattedMinutes + ' ' + ampm;
    return formattedTime;
  }
  
  export const formatDate = (timestamp) =>{
    const date = new Date(timestamp);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
