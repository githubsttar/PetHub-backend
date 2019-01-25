Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    resources :pets
    # get 'pets/image/:id', to: 'pets#get_pet_image'
end
