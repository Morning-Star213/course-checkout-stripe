import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  const item = await req.json();

  let redirectURL: string;
  if (process.env.NODE_ENV === "development") {
    redirectURL = "http://localhost:3000/cart";
  } else {
    redirectURL = "https://stripe-checkout-next-js-demo.vercel.app";
  }

  const transformedItem = {
    price_data: {
      currency: "usd",
      product_data: {
        // images: [item.image],
        name: item.name,
        description: item.description, // Move description here
      },
      unit_amount: item.price * 100, // Ensure item.price is in dollars
    },
    quantity: item.quantity,
  };

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [transformedItem],
      mode: "payment",
      success_url: `${redirectURL}?status=success`,
      cancel_url: `${redirectURL}?status=cancel`,
      metadata: {
        // images: item.image,
      },
    });
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    );
  }
}
