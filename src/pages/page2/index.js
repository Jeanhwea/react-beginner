import React, {useEffect, useState} from 'react';
import Greeting from "../../components/Greeting";

export default function Page2() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  )
}
