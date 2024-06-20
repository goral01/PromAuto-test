import { FC, useState } from "react";
import { Cart } from "../../types/Cart.interface";

import s from "./CartItem.module.scss";

import email from "../../assets/svg/cartSvg/email.svg";
import website from "../../assets/svg/cartSvg/website.svg";
import phone from "../../assets/svg/cartSvg/phone.svg";
import bs from "../../assets/svg/cartSvg/bs.svg";
import catchPhrase from "../../assets/svg/cartSvg/catchPhrase.svg";
import city from "../../assets/svg/cartSvg/city.svg";
import name from "../../assets/svg/cartSvg/name.svg";
import street from "../../assets/svg/cartSvg/street.svg";
import suite from "../../assets/svg/cartSvg/suite.svg";
import zipcode from "../../assets/svg/cartSvg/zipcode.svg";

const CartItem: FC<Cart> = ({ item }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const avatar = (name: string) => {
        return name
            .split(" ")
            .map((el) => el[0])
            .join("");
    };

    return (
        <li className={s.cartItem} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
                <div className={`${s.cartContainer} ${isOpen ? s.open : ""}`}>
                    <div className={s.head}>
                        <div className={s.avatar}>{avatar(item.name)}</div>
                        <div className={s.nameBlock}>
                            <span className={s.name}>{item.name}</span>
                            <span>{item.username}</span>
                        </div>
                    </div>
                    <div className={s.infoItem}>
                        <img src={email} alt="email-icon" />
                        <span>email: {item.email}</span>
                    </div>
                    <div className={s.infoItem}>
                        <img src={website} alt="website-icon" />
                        <span>website: {item.website}</span>
                    </div>
                    <div className={s.infoItem}>
                        <img src={phone} alt="phone-icon" />
                        <span>phone: {item.phone}</span>
                    </div>
                    <div className={s.infoItem}>
                        <img src={street} alt="street-icon" />
                        <span>street: {item.address.street}</span>
                    </div>
                    <div className={s.infoItem}>
                        <img src={suite} alt="suite-icon" />
                        <span>suite: {item.address.suite}</span>
                    </div>
                    <div className={s.infoItem}>
                        <img src={city} alt="city-icon" />
                        <span>city: {item.address.city}</span>
                    </div>
                    <div className={s.infoItem}>
                        <img src={zipcode} alt="zipcode-icon" />
                        <span>zipcode: {item.address.zipcode}</span>
                    </div>
                    <div className={s.infoItem}>
                        <img src={name} alt="name-icon" />
                        <span>name company: {item.company.name}</span>
                    </div>
                    <div className={s.infoItem}>
                        <img src={catchPhrase} alt="catch-icon" />
                        <span>catchPhrase: {item.company.catchPhrase}</span>
                    </div>
                    <div className={s.infoItem}>
                        <img src={bs} alt="bs-icon" />
                        <span>bs: {item.company.bs}</span>
                    </div>
                </div>
            ) : (
                <div className={s.cartContainer}>
                    <div className={s.head}>
                        <div className={s.avatar}>{avatar(item.name)}</div>
                        <div className={s.nameBlock}>
                            <span className={s.name}>{item.name}</span>
                            <span>{item.username}</span>
                        </div>
                    </div>
                    <div className={s.infoItem}>
                        <img src={email} alt="email-icon" />
                        <span>email: {item.email}</span>
                    </div>
                    <div className={s.infoItem}>
                        <img src={website} alt="website-icon" />
                        <span>website: {item.website}</span>
                    </div>
                    <div className={s.infoItem}>
                        <img src={phone} alt="phone-icon" />
                        <span>phone: {item.phone}</span>
                    </div>
                </div>
            )}
            {isOpen && <div className={s.overlay} onClick={() => setIsOpen(false)}></div>}
        </li>
    );
};

export default CartItem;
