class Logger {
  Request(data) {
    try {
      return "Request call..."+` ${data}`;
    } catch (error) {
      return "Request error..."+` ${data}`;
    }
  }
  Response(data) {
    try {
      return "Response found..."+` ${data}`;
    } catch (error) {
      return "Response error..."+` ${data}`;
    }
  }
}

module.exports = new Logger();
