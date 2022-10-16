import React, {useEffect, useState} from 'react';

export default function Greeting({ name }) {
  return (
    <h1 className="Greeting">
      Hello, {name}
    </h1>
  )
}
