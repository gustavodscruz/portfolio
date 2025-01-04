"use client";
import { FaSun } from 'react-icons/fa6'

export default function ToggleBackground() {
  return <FaSun color='#cbd5e1' size={20} className='clickable' onClick={() => {
    alert('Você boiola!!!!!!')
  }} />; 
}
