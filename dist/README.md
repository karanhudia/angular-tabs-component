# angular-tabs-component
## A full featured tab component for Angular (2 and above, including 4).

I have used tabs so many times but i never found a tab component basic and simple enough to use in angular 2/4.

So, i decided to build one for Angular, with all the basic features-
* Simple to use
* Well Documented
* CSS for active tab
* Easily styled (comes with very minimal styling)

If you like this, support the project by starring it!

## Angular supported version
angular-tabs-component supports angular 2.X.X releases, 4.X.X releases, and AoT compilation.

## Example
To install the library:
```
npm install angular-tabs-component
```

Include the library into your app module-
```
import 'TabModule' from 'angular-tabs-component';
```

Add it to your @NgModule imports-
```
@NgModule({
  imports: [
    BrowserModule
    ...,
    ...,
    TabModule
  ],
  declarations: [...],
  ...
})
```

## Usage
```
<tabs>
  <tab tabTitle="Foo>
    I am the foo content
  </tab>
  <tab tabTitle="Bar">
    I am the bar content
  </tab>
<tabs>
```

## What's next
I would always love to hear suggestions for features & improvements - just open an issue.

Some things on our mind down the road:
* Add more tests
* Add more examples
* Enable/Disable the component/tabs

Please check the issues / project before starting to work on a feature / bug to make sure it's not already in progress.
