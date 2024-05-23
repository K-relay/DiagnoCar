function getCookieValue(cookieName) {
    const name = cookieName + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
  
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return '';


  }
  

  const decode = token => {
    const decodedToken = decodeURIComponent(atob(token.split('.')[1].replace('-', '+').replace('_', '/')).split('').map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`).join(''));
    return JSON.parse(decodedToken); // Parse the decoded token to get JSON object
  };
  

  function getValueFromAccsess(key) {
    if (getCookieValue('access').length > 0) {
      var newtoken = decode(getCookieValue('access'));
      if (newtoken && newtoken[key] !== undefined) {
        return newtoken[key];
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  


    

  
const handleLogout = () => {
    // Remove the username cookie
    document.cookie = 'access=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'refresh=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.reload();
  };
  
  export {getCookieValue, handleLogout,getValueFromAccsess };
  