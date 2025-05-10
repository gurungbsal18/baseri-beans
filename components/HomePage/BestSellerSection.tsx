import { bestSellerProductData } from "./data/BestSellerProduct";

import Image from "next/image";

import { Button } from "@heroui/button";

import { FaCartPlus } from "react-icons/fa6";

const BestSellerSection = () => {
  return (
    <div className="best-seller-container">
      <div className="container pt-24">
        <h3 className="title">Best Seller</h3>
        <p>
          Customer favorites, loved for their rich flavor and farm-fresh quality
          — discover what everyone’s brewing
        </p>

        <div className="flex flex-col md:grid grid-cols-4 gap-8 mt-16">
          {bestSellerProductData.map((list) => {
            return (
              <div
                className="col-span-1 coffee-product"
                title={list.title}
                key={list.id}
              >
                <span className={`product-tag ${list.tagColor}`}>
                  {list.tag}
                </span>
                <div className="product-image">
                  <Image
                    src={list.image}
                    alt={list.title}
                    height={250}
                    width={250}
                    className="w-full"
                  />
                </div>
                <div className="product-card-content">
                  <h4 className="product-title">{list.title}</h4>
                  <p className="product-price">
                    Price: {""}
                    <span
                      className={`${list.afterDiscountPrice ? "discount-price" : ""}`}
                    >
                      {list.price}
                    </span>
                    {""} {list?.afterDiscountPrice} /-
                  </p>
                  <div className="product-card-button">
                    <Button color="primary" radius="sm" className="flex-grow">
                      View Detail
                    </Button>

                    <span className="cart-button" title="Add To Cart">
                      <FaCartPlus />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestSellerSection;
