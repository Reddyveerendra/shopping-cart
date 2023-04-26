/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { data } from "./data"
import { useEffect, useState } from "react"
import React from "react";
import { CartItem } from "./cartItem";
export const Cart = () => {
    const [list, setList] = useState([...JSON.parse(window.localStorage.getItem("list"))]);
    const [cartData, setCartData] = useState({ ...data })
    const effectTriggeredRef = React.useRef(false);
    useEffect(() => {
        console.log("list.start")
        if (!effectTriggeredRef.current) {
            for (let i = 0; i < list.length; i++) {
                setCartData(prev => {
                    prev[list[i]].orders = prev[list[i]].orders + 1
                    return { ...prev }
                }
                )
            }
            effectTriggeredRef.current = true;
        }
        console.log("list.end")
    }, [list])
    function add(e) {
        console.log(e.target.id)
        const i = parseInt(e.target.id)
        setList(prev => {
            prev.push(i)
            return prev
        })
        setCartData(prev => {
            prev[i].orders = prev[i].orders + 1
            return { ...prev }
        }
        )
        console.log(list)
    }
    function sub(e) {
        const i = parseInt(e.target.id)
        const index = list.indexOf(i);
        setList(prev => {
            if (index === -1) {
                return prev
            }
            prev.splice(index, 1)
            return prev
        })
        setCartData(prev => {
            if (index === -1) {
                return prev
            }
            prev[i].orders = prev[i].orders - 1
            return { ...prev }
        })
        console.log(list)
    }
    return (
        <div className="cartCollection">
            {cartData[0].orders > 0 ? (<div className="cartItem" id="0"><CartItem {...cartData[0]} add={add} sub={sub} id={0} /></div>) : ""}
            {cartData[1].orders > 0 ? (<div className="cartItem"><CartItem {...cartData[1]} add={add} sub={sub} id={1} /></div>) : ""}
            {cartData[2].orders > 0 ? (<div className="cartItem"><CartItem {...cartData[2]} add={add} sub={sub} id={2} /></div>) : ""}
            {cartData[3].orders > 0 ? (<div className="cartItem"><CartItem {...cartData[3]} add={add} sub={sub} id={3} /></div>) : ""}
            {cartData[4].orders > 0 ? (<div className="cartItem"><CartItem {...cartData[4]} add={add} sub={sub} id={4} /></div>) : ""}
            {cartData[5].orders > 0 ? (<div className="cartItem"><CartItem {...cartData[5]} add={add} sub={sub} id={5} /></div>) : ""}
            {cartData[6].orders > 0 ? (<div className="cartItem"><CartItem {...cartData[6]} add={add} sub={sub} id={6} /></div>) : ""}
            {cartData[7].orders > 0 ? (<div className="cartItem"><CartItem {...cartData[7]} add={add} sub={sub} id={7} /></div>) : ""}
        </div>
    )
}