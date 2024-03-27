import { Car } from './models/Car.js'
import { Frog } from './models/Frogs.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  // NOTE working with this stuff you can just get rid of it
  // /**@type {import('./models/Example.js').Example[]} */
  // examples = []


  // NOTE when we updated our constructor to take in a 'data' object, our default cars needed to be updated too
  // cars = [
  //   new Car('dodge', 'neon', 1996, 'orange', 200, 150000, true, 'https://www.carscoops.com/wp-content/uploads/2019/04/30bd62fe-2005-dodge-neon-srt4-bat-auction-60.jpg'),
  //   new Car('mazda', 'miata', 1995, 'white', 20000, 200000, false, 'https://images.topgear.com.ph/topgear/images/2019/02/03/mazda-miata-mt1-1549188870.jpg'),
  //   new Car('tesla', 'cybertruck', 2024, 'silver', 81895, 100, true, 'https://www.digitaltrends.com/wp-content/uploads/2019/12/tesla-cybertruck-1220.jpg?resize=1200%2C630&p=1'),
  //   new Car('toyota', 'tacoma', 2018, 'cement', 35000, 72000, true, 'https://www.purosautos.com/wp-content/uploads/2018/09/2018-Toyota-Tacoma-.jpg')
  // ]

  cars = [
    new Car({
      make: 'dodge',
      model: 'neon',
      year: 1996,
      color: 'orange',
      price: 200,
      mileage: 150000,
      automatic: true,
      imgUrl: 'https://www.carscoops.com/wp-content/uploads/2019/04/30bd62fe-2005-dodge-neon-srt4-bat-auction-60.jpg'
    }),
    new Car({
      make: 'mazda',
      model: 'miata',
      year: 1995,
      color: 'white',
      price: 20000,
      mileage: 200000,
      automatic: false,
      imgUrl: 'https://images.topgear.com.ph/topgear/images/2019/02/03/mazda-miata-mt1-1549188870.jpg'
    }),
  ]

  houses = [
    new House({
      year: '1974',
      name: 'Ol Grainy',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 375000,
      description: 'Newly renovated mid-century modern home',
      imgUrl: 'https://live.staticflickr.com/3479/3844057869_640b15073b_b.jpg'
    }),

    new House({
      year: '1985',
      name: 'Weird and Tiny',
      bedrooms: 1,
      bathrooms: 2,
      sqft: 400,
      price: 75000,
      description: 'That is a lot of bathrooms considering the number of bedrooms and size of the house!',
      imgUrl: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/d1a88bb5-82c3-41a9-80c1-3b7f95859ca8-1.%20escape-pod-uk-exterior.jpg'
    }),
  ]

  frogs = [
    new Frog({
      age: 2,
      name: 'Elvis',
      species: 'Red-Eyed Tree Frog',
      weight: 2,
      price: 85,
      description: 'Red-eyed tree frogs have three eyelids on each eye!',
      imgUrl: 'https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2.jpg',
    }),
    new Frog({
      age: 5,
      name: 'Ribbity',
      species: 'Tomato Frog',
      weight: 3,
      price: 115,
      description: 'This species is found exclusively in Madagascar, along the eastern rainforest belt of the island.',
      imgUrl: 'https://www.thebiodude.com/cdn/shop/articles/546844B3-F6E8-45A0-8612-3F4A9B9718AE_7b7b6bd4-ca52-4376-91c1-b9ec216c8da9.jpg?v=1697552257',
    }),
  ]



}

export const AppState = createObservableProxy(new ObservableAppState())