import {
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";

export default function Contacto() {
  return (
    <div className="w-[65%] min-h-[100vh] flex flex-col items-center justify-center gap-4   text-white">
      <div className="w-full min-h-[65vh]  bg-fondo-oscuro-div flex flex-col justify-center rounded-2xl borde items-center">
        <h2>Contacto</h2>
        <Fieldset.Root size="lg" maxW="md">
          <Stack>
            <Fieldset.HelperText>
              Ingrese su información de contacto
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <Field.Root>
              <Field.Label>Nombre</Field.Label>
              <Input name="name" placeholder="nombre" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Correo electrónico</Field.Label>
              <Input name="email" type="email" placeholder="email"/>
            </Field.Root>
            <Field.Root>
              <Field.Label>Mensaje</Field.Label>
              <Textarea variant="outline" placeholder="mensaje" />
            </Field.Root>
          </Fieldset.Content>

          <Button
            type="submit"
            alignSelf="flex-start"
            bgColor={"white"}
            color={"black"}
            variant={"subtle"}
          >
            Enviar
          </Button>
        </Fieldset.Root>
      </div>
    </div>
  );
}
