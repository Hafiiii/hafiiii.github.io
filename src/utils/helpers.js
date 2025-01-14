/* eslint-disable */

// validation controls
export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s])[a-zA-Z\d\S]{6,}$/;
// validation functions
export const isStringNullOrEmpty = (value) => { return (typeof value === 'undefined') ? true : (value === null || value === null) ? true : (typeof value === "string" && value.trim() === "") ? true : false }

export const isObjectUndefinedOrNull = (obj) => { return (typeof obj === 'undefined' || obj === null) ? true : false }

export const isArrayNotEmpty = (list) => {
  try {
    if (typeof list !== 'undefined' && list !== null && Array.isArray(list) && list.length > 0)
      return true
    else
      return false
  }
  catch (e) {
    console.log(e)
    return false
  }
}

export const isContactValid = (contact) => { return (typeof contact !== 'undefined' && contact !== '' && /^(0|1)[0-46-9.\-]*[0-9.\-]{7,8}?$/.test(contact)) }

export const isEmailValid = (email) => { return (typeof email === 'undefined' || email === '' || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) ? false : true }

export const isLongitude = (longitude) => { return isFinite(longitude) && Math.abs(longitude) <= 180; }

export const isLatitude = (latitude) => { return isFinite(latitude) && Math.abs(latitude) <= 90; }

export const isDecimalValid = (number) => { return (typeof number === 'undefined' || number == '' || !/^[0-9]\d*(\.\d+)?$/.test(number)) ? true : false }

export const isNumber = (number) => { return (!isStringNullOrEmpty(number) && !isNaN(number)) }

//time functions
export const convertDateTimeToString112Format = (date, fetchTime, symbol) => {
  symbol = typeof symbol !== "undefined" ? symbol : "/"
  try {
    let date112 = typeof date !== "undefined" && date !== "" ? new Date(date) : new Date();
    let dd = (date112.getDate().toString().length <= 1) ? "0" + date112.getDate() : date112.getDate().toString()
    let mm = ((date112.getMonth() + 1).toString().length <= 1) ? "0" + (date112.getMonth() + 1) : (date112.getMonth() + 1).toString()
    let yyyy = date112.getFullYear();
    let HH = (date112.getHours().toString().length <= 1) ? "0" + date112.getHours() : date112.getHours().toString()
    let MM = (date112.getMinutes().toString().length <= 1) ? "0" + date112.getMinutes() : date112.getMinutes().toString()
    let ss = (date112.getSeconds().toString().length <= 1) ? "0" + date112.getSeconds() : date112.getSeconds().toString()

    return (fetchTime === true) ? (yyyy.toString() + symbol + mm + symbol + dd + " " + HH + ":" + MM + ":" + ss) : (yyyy.toString() + symbol + mm + symbol + dd)
  }
  catch (e) {
    let date112 = new Date();
    let dd = (date112.getDate().toString().length <= 1) ? "0" + date112.getDate() : date112.getDate().toString()
    let mm = ((date112.getMonth() + 1).toString().length <= 1) ? "0" + (date112.getMonth() + 1) : (date112.getMonth() + 1).toString()
    let yyyy = date112.getFullYear();
    let HH = (date112.getHours().toString().length <= 1) ? "0" + date112.getHours() : date112.getHours().toString()
    let MM = (date112.getMinutes().toString().length <= 1) ? "0" + date112.getMinutes() : date112.getMinutes().toString()
    let ss = (date112.getSeconds().toString().length <= 1) ? "0" + date112.getSeconds() : date112.getSeconds().toString()

    return (fetchTime === true) ? (yyyy.toString() + symbol + mm + symbol + dd + " " + HH + ":" + MM + ":" + ss) : (yyyy.toString() + symbol + mm + symbol + dd)
  }
}

export const convertDateTimeTo112Format_Moment = (date) => {
  return date.getFullYear() + "" + leftPad(parseInt(date.getMonth() + 1), 2) + "" + leftPad(date.getDate(), 2)
}

export const getCurrentTimestampString = (symbol) => {
  symbol = isStringNullOrEmpty(symbol) ? "" : symbol

  let date112 = new Date();
  let dd = (date112.getDate().toString().length <= 1) ? "0" + date112.getDate() : date112.getDate().toString()
  let mm = ((date112.getMonth() + 1).toString().length <= 1) ? "0" + (date112.getMonth() + 1) : (date112.getMonth() + 1).toString()
  let yyyy = date112.getFullYear();
  let HH = (date112.getHours().toString().length <= 1) ? "0" + date112.getHours() : date112.getHours().toString()
  let MM = (date112.getMinutes().toString().length <= 1) ? "0" + date112.getMinutes() : date112.getMinutes().toString()
  let ss = (date112.getSeconds().toString().length <= 1) ? "0" + date112.getSeconds() : date112.getSeconds().toString()
  return (yyyy.toString() + symbol + mm + symbol + dd + symbol + HH + symbol + MM + symbol + ss)
}

export const copyToClipboard = async (text) => {
  try {
      const isCompleted = await navigator.clipboard.writeText(text);
      return isCompleted
  }
  catch{
      return false
  }
}

// text transformation functions
export const capitalizeFirstLetterOfSentences = (text) => { return (typeof text !== "undefined" ? text.slice(0, 1).toUpperCase() + text.slice(1, text.length) : "") }

export const capitalizeEveryFirstLetter = (text) => { return (typeof text !== "undefined" ? text.replace(/\b(\w)/g, s => s.toUpperCase()) : "") }

export const convertArrayToStringWithSpecialCharacter = (list, sc) => {
  sc = (sc !== null) ? sc : ", "
  if (!Array.isArray(list))
    return "";
  else {
    let text = ""
    for (let i = 0; i < list.length; i++) {
      text += list[i]
      if (i == list.length - 1)
        break;
      else
        text += sc
    }
    return text;
  }
}

export const extractNumberFromStrings = (text) => { return (typeof text === "string") ? Number("5g".replace(/[^0-9\.]+/g, "")) : 0 }

// image utilities functions
export const getImageOrientationType = (imageWidth, imageHeight) => {
  if (Number(imageWidth) > Number(imageHeight))
    return "Landscape"
  else if (Number(imageWidth) < Number(imageHeight))
    return "Potrait"
  else
    return "Square"
}

// file handler
export const getFileExtension = (file) => {
  if (typeof file !== "undefined" && typeof file === 'string')
    return file.split('.').pop();
  else {
    try {
      if (file.length > 0) {
        let fileExts = []
        file.map(el => { return fileExts.push(el.name.split('.').pop()) })
        return fileExts
      }
      else {
        return file.name.split('.').pop()
      }
    } catch (e) {
      console.log("getFileExtension: this is not a file")
      return "";
    }
  }
}

export const getFileTypeByExtension = (ext) => {
  if (typeof ext !== "string") {
    console.log("getFileTypeByExtension: this is not a string")
    return ""
  }
  else {
    ext = ext.replace(".", "")
    ext = ext.toLowerCase()
    switch (ext) {
      case "jpg":
      case "jpeg":
      case "png":
        return "image";

      case "mp4":
      case "avi":
      case "mov":
        return "video";

      case "txt":
      case "pdf":
      case "ppt":
        return "file";

      case "docx":
      case "doc":
        return "docs";

      case "xls":
      case "xlsx":
      case "csv":
        return "excel";

      default:
        console.log("getFileTypeByExtension: the value is not found in the library")
        return ""
    }
  }
}

// screen function
export function getWindowDimensions() {
  const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
  return { screenWidth, screenHeight };
}

// currency / money handler functions
export const roundOffTotal = (val) => {
  try {
    if (Number(val) % 0)
      return 0
    else {
      let amount = Number(val).toFixed(2).toString();
      let decimal = amount.split(".").pop()
      amount = amount.split(".")[0]
      decimal = decimal.toString().split("")

      let firstDigit = decimal[0]
      let lastDigit = decimal.pop()

      let roundingOff;
      if (Number(lastDigit) < 5) {
        roundingOff = firstDigit.toString() + "0"
        return amount.toString().concat("." + roundingOff.toString())
      } else {
        if (firstDigit == 9) {
          amount = Number(amount) + 1
          roundingOff = amount.toString() + ".00"
        }
        else {
          firstDigit = Number(firstDigit) + 1
          roundingOff = amount.toString() + "." + firstDigit.toString() + "0"
        }
        return roundingOff
      }
      // switch (Number(lastDigit)) {
      //     case 0:
      //     case 1:
      //     case 2:
      //         roundingOff = firstDigit.toString() + "0"
      //         return Number(amount.toString().concat("." + roundingOff.toString())).toFixed(2)
      //         break;

      //     case 3:
      //     case 4:
      //     case 5:
      //     case 6:
      //     case 7:
      //         roundingOff = firstDigit.toString() + "5"
      //         return Number(amount.toString().concat("." + roundingOff.toString())).toFixed(2)
      //         break;

      //     case 8:
      //     case 9:
      //         if (firstDigit == 9) {
      //             amount = Number(amount) + 1
      //             roundingOff = amount.toString() + ".00"
      //         }
      //         else {
      //             firstDigit = Number(firstDigit) + 1
      //             roundingOff = amount.toString() + "." + firstDigit.toString() + "0"
      //         }
      //         return Number(roundingOff).toFixed(2)
      //         break;

      //     default:
      //         break;
      // }
    }
  }
  catch (e) { console.error("Error: " + e) }
}

// round up for weight
export const round = (num, places) => {
  let amount = Number(num).toFixed(4).toString();
  let decimal = amount.split(".").pop()
  amount = amount.split(".")[0]
  decimal = decimal.toString().split("")

  let forthDigit = decimal[places]
  let roundingUp;
  if (Number(forthDigit) > 0) {
    decimal[places - 1] = Number(decimal[places - 1]) + 1
    decimal.pop()
    roundingUp = `${amount.toString()}.${decimal.join("")}`
  } else {
    roundingUp = `${amount.toString()}.${decimal.join("")}`
  }
  return Number(roundingUp).toFixed(3)
}

export const volumeCalc = (depth, width, height) => {
  let volume = (depth * width * height) / 1000000
  volume = round(volume, 3)
  return Number(volume)
}

// localStorage
export const resetLocalStorage = () => { localStorage.clear() }

// self-class function
const leftPad = (number, targetLength) => {
  var output = number + '';
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return output;
}

// split array
export const splitArray = (arr, len) => {
  var chunks = [], i = 0, n = isArrayNotEmpty(arr) ? arr.length : 0;
  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }
  return chunks;
}

// uploader
export const uploader = async (files, filenames, directory,ID) => {
  const formData = new FormData();
  formData.append("Directory", directory);
  formData.append("ID", ID);
  
  for (var j = 0; j < files.length; j++) {
    formData.append("upload[]", files[j]);
    formData.append("fileName[]", filenames[j]);
  }
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  const resp = await axios.post(ServerConfiguration.uploadUrl, formData, config)
  try {
    return (resp.status == 200) ? true : false
  }
  catch (err) {
    console.log(err)
    return false
  }
}

export const UploadBase64Images = async (directory, base64_images, filenames, url) => {
  const formData = new FormData();
  formData.append("Directory", directory);
  for (var j = 0; j < base64_images.length; j++) {
      formData.append("upload", base64_images[j]);
      formData.append("fileName", filenames[j]);
  }
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  const resp = await axios.post(url, formData, config)
  try {
      return (resp.status == 200 && resp.data == 1) ? true : false
  }
  catch (err) {
      console.log(err)
      return false
  }
}

export const getAgeFromIcNo = (icno) => {
  if (icno.length >= 6) {
      let year = icno.substring(0, 2);
      let month = icno.substring(2, 4);
      let day = icno.substring(4, 6);

      if (!isNaN(Number(year)) && !isNaN(Number(month)) && !isNaN(Number(day))) {
          if (year.substring(0, 1) === 0 || year.substring(0, 1) === "0")
              year = "20".concat(year)
          else
              year = "19".concat(year)

          month = month - 1
          let age = new Date().getFullYear() - year
          return age
      }
  }
}

export const RandomString = (len) => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;

  try {
      len = Number(len)
  }
  catch (error) {
      console.warning(error)
      len = 8
  }

  for (var i = 0; i < len; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

