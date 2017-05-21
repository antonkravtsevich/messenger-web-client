var axiosErrorLog = function(start_string, error){
  var message = start_string+'\n';
  if(error.config!=undefined){
    message+=error.config.method.toUpperCase() + " " + error.config.url + '\n';
    if(error.config.headers!=undefined){
      message+='HEADERS:\n'
      Object.keys(error.config.headers).forEach((key) => {
        message+='\t'+key+" : "+error.config.headers[key]+'\n';
      })
    }
    if(error.config.data!=undefined){
      message+='DATA:\n'
      var data = JSON.parse(error.config.data);
      Object.keys(data).forEach((key) => {
        message+='\t'+key+" : "+data[key]+'\n';
      })
    }
    console.error(message);
  } else {
    message+=JSON.stringify(error);
    console.error(message);
  }
}

module.exports = axiosErrorLog;
