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
    <div className="relative top-90 flex flex-col w-full items-center justify-center gap-4 color-fondo-oscuro text-white">
      <div className="min-w-4/5 flex flex-col items-center">
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
