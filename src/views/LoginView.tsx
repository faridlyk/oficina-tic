import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";

import PublicLayout from '@/components/layout/PublicLayout';

import { useNavigate } from 'react-router-dom';

export default function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const navigate = useNavigate();
    return (
        <PublicLayout>
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="flex w-full max-w-md flex-col gap-6">
                    <div className={cn("flex flex-col  gap-6 ", className)} {...props}>
                        <Card className="bg-card">
                            <CardHeader className="text-center">
                                <CardTitle className="text-xl">Acceder</CardTitle>
                                <CardDescription>
                                    Inicia sesión con tu cuenta de Google o Outlook
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <FieldGroup>
                                        <Field>
                                            <Button variant="outline" type="button">
                                                <FaMicrosoft className="mr-2 h-4 w-4" />
                                                Acceder con Outlook
                                            </Button>
                                            <Button variant="outline" type="button">
                                                <FcGoogle className="mr-2 h-4 w-4" />
                                                Acceder con Google
                                            </Button>
                                        </Field>
                                        <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                                            O continúa con
                                        </FieldSeparator>
                                        <Field>
                                            <FieldLabel htmlFor="email">Correo electrónico</FieldLabel>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="m@ejemplo.com"
                                                required
                                            />
                                        </Field>
                                        <Field>
                                            <div className="flex items-center">
                                                <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                                                <a
                                                    href="#"
                                                    className="ml-auto text-sm underline-offset-4 hover:underline"
                                                >
                                                    ¿Olvidaste tu contraseña?
                                                </a>
                                            </div>
                                            <Input id="password" type="password" required />
                                        </Field>
                                        <Field>
                                            <Button type="submit">Iniciar sesión</Button>
                                            <FieldDescription className="text-center text-foreground">
                                                ¿No tienes una cuenta? <Button variant="link" className="p-0 h-auto font-normal underline" onClick={() => navigate('/registrarse')}>Regístrate</Button>
                                            </FieldDescription>
                                        </Field>
                                    </FieldGroup>
                                </form>
                            </CardContent>
                        </Card>
                        <FieldDescription className="px-6 text-center text-foreground">
                            Al hacer clic en continuar, aceptas nuestros <a href="#">Términos de Servicio</a>{" "}
                            y <a href="#">Política de Privacidad</a>.
                        </FieldDescription>
                    </div>
                </div>
            </div>
        </PublicLayout>
    )
}
