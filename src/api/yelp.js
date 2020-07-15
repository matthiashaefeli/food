import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer Ds2TpCzS4_wnyve5zsY841yGLMnOHYAZKiUXrgEdwC7FpNHp7meaxbZOw1WcitBzKp1wEidPAUOYLbnRZCLPLNcOEswtpKGVGrlw11jBYf2zPNTMfMD58K0687oMX3Yx'
  }
});