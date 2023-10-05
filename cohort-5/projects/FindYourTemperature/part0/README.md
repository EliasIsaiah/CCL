### Here is the updated solution for the *Build A Weather App With Vanilla Javascript Tutorial | Javascript For Beginners* code-along exercise

### I have made the following changes as I worked to modernize this webapp a bit, and adapt it so that it works with the OpenWeatherMapAPI.

* used async/await instead of timezone
* included temperature conversion function to convert temperatures from K to F, K to C
* used location name rather than location timezone due to limitation of openWeatherMapAPI
* used CONST instead of LET where possible
* using the openWeatherAPI icons rather than the Skycons library