// import React from "react";
"use client";

import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { useForm } from "react-hook-form";
import { addBrand } from "../brands.api";
import { BrandData } from "../../../interfaces/brand.interface";
import { useRouter } from "next/navigation";

export function BrandForm() {
  const { register, handleSubmit } = useForm<BrandData>();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    await addBrand(data);
    router.push("/");
    router.refresh();
  });

  return (
    <form onSubmit={onSubmit}>
      <Label>Marca</Label>
      <Input {...register("name")} />
      <Label>Descripción</Label>
      <Input {...register("description")} />

      <Button className="mt-5">Agregar Marca</Button>
    </form>
  );
}

export default BrandForm;
