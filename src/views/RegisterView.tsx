import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from "@/components/ui/field"
import PublicLayout from '@/components/layout/PublicLayout';
import { useNavigate } from 'react-router-dom';
import { cn } from "@/lib/utils"
import { GalleryVerticalEnd } from "lucide-react"
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "El nombre debe tener al menos 2 caracteres.",
    }),

    email: z.string().email({
        message: "Por favor ingresa un correo electrónico válido.",
    }),
    password: z.string().min(8, {
        message: "La contraseña debe tener al menos 8 caracteres.",
    }),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
});

const RegisterView: React.FC = ({
    className,
    ...props
}: React.ComponentProps<"div">) => {
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",

            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        navigate('/apps');
    }

    return (
        <PublicLayout>
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="flex w-full max-w-md flex-col gap-6">
                    <div className={cn("flex flex-col gap-6 ", className)} {...props}>
                        <Card className="bg-card">
                            <CardHeader className="text-center">
                                <CardTitle className="text-xl">Registrarse</CardTitle>
                                <CardDescription>
                                    Ingresa tu correo electrónico para crear tu cuenta
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <FieldGroup>
                                        <Field>
                                            <FieldLabel htmlFor="name">Nombre completo</FieldLabel>
                                            <Input
                                                id="name"
                                                placeholder="Juan"
                                                {...form.register("name")}
                                            />
                                            <FieldError errors={[form.formState.errors.name]} />
                                        </Field>

                                        <Field>
                                            <FieldLabel htmlFor="email">Correo electrónico</FieldLabel>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="m@ejemplo.com"
                                                {...form.register("email")}
                                            />
                                            <FieldError errors={[form.formState.errors.email]} />
                                        </Field>

                                        <Field>
                                            <Field className="grid grid-cols-2 gap-4">
                                                <Field>
                                                    <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                                                    <Input
                                                        id="password"
                                                        type="password"
                                                        {...form.register("password")}
                                                    />
                                                    <FieldError errors={[form.formState.errors.password]} />
                                                </Field>

                                                <Field>
                                                    <FieldLabel htmlFor="confirmPassword">Confirmar contraseña</FieldLabel>
                                                    <Input
                                                        id="confirmPassword"
                                                        type="password"
                                                        {...form.register("confirmPassword")}
                                                    />
                                                    <FieldError errors={[form.formState.errors.confirmPassword]} />
                                                </Field>
                                            </Field>
                                            <FieldDescription className=''>
                                                La contraseña debe tener al menos 8 caracteres.
                                            </FieldDescription>
                                        </Field>

                                        <Field>
                                            <Button type="submit">Registrarse</Button>
                                            <FieldDescription className="text-center text-foreground">
                                                ¿Ya tienes una cuenta? <Button variant="link" className="p-0 h-auto font-normal underline" onClick={() => navigate('/acceder')}>Acceder</Button>
                                            </FieldDescription>
                                        </Field>
                                    </FieldGroup>
                                </form>
                            </CardContent>
                        </Card>
                        <FieldDescription className="px-6 text-center text-foreground">
                            Al hacer clic en registrarse, aceptas nuestros <a href="#">Términos de Servicio</a>{" "}
                            y <a href="#">Política de Privacidad</a>.
                        </FieldDescription>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
};

export default RegisterView;
