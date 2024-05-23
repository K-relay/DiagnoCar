let error = null;
let code = null;
let CodeType = null;
let codeDescribe = null;
let manufacture = null;

// Getter and Setter for 'error'
function getError() {
  return error;
}

function setError(newError) {
  error = newError;
}

// Getter and Setter for 'code'
function getCode() {
  return code;
}

function setCode(newCode) {
  code = newCode;
}

// Getter and Setter for 'CodeType'
function getCodeType() {
    if(getCodeDescribe().includes("گشتی")){
        CodeType="گشتی";
    }else{
        CodeType="Manufacture";

    }
 return CodeType;
}



function getCodeDescribe() {
  return codeDescribe;
}


function getManufacture() {
  return manufacture;
}

function setManufacture(newManufacture) {
  manufacture = newManufacture;
}




function codeTypeAnalyze(code) {
    var codetype = null;
    if (typeof code !== "string" || code.length !== 5) {
      error="  ببورە ئەم کۆدە کێشەی هەیە تکایە دڵنیا ببەوە لە دروستی کۆدەکە ، کە نابێت لە پێنج زیاتر یان کەمتر بێت ";
    } else {
      if (
        code.startsWith("P0") ||
        code.startsWith("P2") ||
        (code >= "P3400" && code <= "P3999")
      ) {
        codetype = "گشتی - Powertrain";
      } else if (
        code.startsWith("P1") ||
        (code >= "P3000" && code <= "P3399")
      ) {
        codetype = "تایبەتی-specific - Powertrain";
      }
      // Chassis codes pattern
      else if (code.startsWith("C0") || code.startsWith("C3")) {
        codetype = "گشتی - Chassis";
      } else if (code.startsWith("C1") || code.startsWith("C2")) {
        codetype = "تایبەتی-specific - Chassis";
      }
      // Body codes pattern
      else if (code.startsWith("B0") || code.startsWith("B3")) {
        codetype = "گشتی - Body";
      } else if (code.startsWith("B1") || code.startsWith("B2")) {
        codetype = "تایبەتی-specific - Body";
      }
      // Network Communication codes pattern
      else if (code.startsWith("U0") || code.startsWith("U3")) {
        codetype = "گشتی - Network Communication";
      } else if (code.startsWith("U1") || code.startsWith("U2")) {
        codetype = "تایبەتی-specific - Network Communication";
      } else {
        error=
          "ئەم کۆدە بەشێک نیە لە کۆدەکانی کێشەی ئۆتۆمبێل";
      }

      if (codetype !== null) {
        codeDescribe=codetype;
        error=null;
        return true;
      }else{
       return false;
      }
    }
  }

  function manufactorerDetec() {
    if (getManufacture() === "0") {
      error="جۆری ئۆتۆمبێل هەڵبژێرە";
      return false;
    }else{
     error=null;
     return true;
    }
  }

  export {
    getError,
    setError,
    getCode,
    setCode,
    getCodeType,
    getCodeDescribe,
    getManufacture,
    setManufacture,
    codeTypeAnalyze,
    manufactorerDetec};