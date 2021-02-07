import React from 'react'

function Card({ title, subtitle, icon }) {
  return (
    <div class="service__item">
      { icon }
      <div class="service__item-body">
        <h5 class="service__item-title">{ title }</h5>
        <p class="service__item-text">{ subtitle }</p>
      </div>
    </div>
  )
}

export default Card
