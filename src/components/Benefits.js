import React from 'react';
import "./App.css"

const Benefits = () => {
  return (
    <>
      <div id='Benefits'>
        <div className="ben_inner">
          <h1>Benefits</h1>
          <div className="ben_points container mt-4">
            <dl>
              <dt>Increases lifespan</dt>
              <dd>
               Though there are many factors that would attribute to an increased lifetime and adopting a vegetarian diet is one factor you can follow. The more you eat fruits or vegetables, the lesser is the toxin and chemical build up in your body, thus facilitating more healthy years and a longer lifespan.</dd>
              <br />

              <dt>Lower cholesterol levels</dt>
              <dd>Believe or not but there is no health benefit in eating animal fat. As cholesterol comes only from animal foods, vegetarian diets are cholesterol-free. Although cholesterol is an essential component of each human cell, vegetarians do not need to worry about not getting enough cholesterol, because the body can make all the cholesterol it needs from vegan foods. Korean researchers after examining the long-term effects of following a vegetarian diet concluded that body fat and cholesterol levels were lower in vegetarians than omnivores.</dd>
              <br />

              <dt>Less risk of stroke and obesity</dt>
              <dd>The vegetarians tend to be much more conscious in their food choices and usually never overeat or pick foods based on emotions; two practices that greatly contribute to obesity. The University Hospital Ghent Department of Pediatrics in Belgium says adopting a vegan diet is a good way to minimize your chances of having a stroke or being obese.</dd>
              <br />

              <dt>Gives healthy skin</dt>
              <dd>If you wish to have healthy skin then you need to eat the right amount of vitamins and minerals with plenty of water. Fruits and vegetables that we eat are very rich in vitamins, minerals and also have sufficient antioxidants. Moreover, as they are water based, if you eat them raw it can further improve the intake of healthy nutrients. Many vegetarian foods also are rich sources of antioxidants that help you stay disease free, with healthier skin.</dd>
              <br />
            </dl>
          </div>
          <img src="smallCow.jpg" alt="cow"/>
        </div>
      </div>
    </>
  )
}

export default Benefits
