# vuepress

approve images uploaded to website

The task menitons Photo upload. I've called it Images.
This is what I have accomplished within the given time frame.

## Deliverables

- Minimal website with routing and base layout.
- Use of Vuetify
- Image carousel Displaying images
- preview of 10 images (referred to as InView Images)
- list of uploaded images
- Vuex store to bind several controls together
  - Vuew store with state for uploaded/rejected and approved images.
- Button simulating Upload of new image (By adding a new image to the Vuew store state)

### Todo

- Todo add Api gateway that could call backend endpoint desribed in the task

```
https://photobackend/photos/id/12332?size=small

```

Where size could be

- tiny (48px)
- small (400px)
- medium (800px)
- large (1280px)

or

```
https://photobackend/photos/id/12332/1280

```

where size is given directly in url parameter

Response should return

```
{
    id:12332,
    url:https://photobackend/photos/id/12332
    description: "Description goes here...",
    keywords: ["alpha","nature","blue"],
    date :"date goes here"
}
```

## Not Done

- Display use of typescript (I can add this on request)
- Making code production ready
  - Code is production ready if you are confident it work.
    - In practice I think its achieved by adding coded tests, which to some degreee verifies the correctness of the code.
    - Error handling is an important aspect. What if the backend is off line or something. User needs to be notified in a proper manner.
    - pixel perfectness like alignment, one pixdel off errors etc.
- implementation of backend (Which was not required in the task given)
  - Implementation of webhook or event notification mechanism. When ever a phtoto is uploadded it should show up on the website in real time. This is achieved by web hooks. In C# for instance, One could use a technology like SignalR to implement this functionality.
- Proper use of vue props. Currently all components get data via the vuex store. One could argue that another place in code should be responsible for that and then populate state via props. Split data fetching from view rendering.
- Code is organised by technology like small demo projects often are. In a real world Setup, I would recommend organizing code primarily by business capabilities or use cases

## How to run it

clone repository. Then Run:

```
yarn install
```

```
yarn serve
```

## **Tip** Enable **Vue Devtools** in the browser and watch the state of the VUEX store when clicking around.
