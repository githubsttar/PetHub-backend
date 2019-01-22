Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    resources :pets do
    end
    resources :tags do
      end
    resources :petstags do
    end
end
