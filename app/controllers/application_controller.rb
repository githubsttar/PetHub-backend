class ApplicationController < ActionController::Base
  include ::ActionController::Cookies
  include Response
  include ExceptionHandler
end
