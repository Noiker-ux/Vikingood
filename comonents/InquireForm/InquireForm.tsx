"use client";

import { Button, Checkbox, Label, ListBox, Select, TextArea, TextField } from "@heroui/react";
import { Input } from "@heroui/react/input";

export default function InquireForm() {
  return (
    <div className="w-1/3 bg-[var(--background-color)] h-screen absolute top-0 right-0 overflow-y-scroll">
      <div className="py-8 pl-6 pr-3 bg-[var(--primary-color)] text-white uppercase text-sm">
        <p>Задать вопрос</p>
      </div>
      <div className="py-10 px-12">
        <h1 className="text-[var(--primary-color)] text-4xl">Задать вопрос</h1>
        <p className="mt-5 text-[var(--primary-color)]">
          Стоимость аренды начинается от 5,8 миллионов долларов. Строительство идет полным ходом — первые резиденции
          будут сданы летом 2026 года. Сейчас, когда в комплексе всего 25 роскошно обставленных резиденций Auberge и
          всего 26 жилых комплексов, нет лучшего момента, чем сейчас.
        </p>
        <form className="mt-10">
          <div className="flex items-center gap-5 pb-3 border-b-2 border-[var(--secondary-color)]">
            <div className="w-2 h-2 rounded-full bg-[var(--secondary-color)]"></div>
            <p className="text-[var(--secondary-color)]">Контактная информация</p>
          </div>
          <div className="flex flex-col gap-y-10 mt-10">
            <div className="flex gap-5">
              <TextField className={"w-full"}>
                <Label className="text-xs text-[var(--primary-color)]">Имя</Label>
                <Input className={"input-primary"} id="input-firstName" type="text" placeholder="Имя" />
              </TextField>
              <TextField className={"w-full"}>
                <Label className="text-xs text-[var(--primary-color)]">Фамилия</Label>
                <Input className={"input-primary"} id="input-middleName" type="text" placeholder="Фамилия" />
              </TextField>
            </div>
            <div className="flex gap-5">
              <TextField className={"w-full"}>
                <Label className="text-xs text-[var(--primary-color)]">EMAIL</Label>
                <Input className={"input-primary"} id="input-email" type="email" placeholder="Email" />
              </TextField>
              <TextField className={"w-full"}>
                <Label className="text-xs text-[var(--primary-color)]">Номер телефона</Label>
                <Input className={"input-primary"} id="input-phone" type="text" placeholder="Телефон" />
              </TextField>
            </div>

            <Select className={"input-primary"}>
              <Label className="text-xs text-[var(--primary-color)]">Тема вопроса</Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="florida" textValue="Florida">
                    Florida
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="delaware" textValue="Delaware">
                    Delaware
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="california" textValue="California">
                    California
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="texas" textValue="Texas">
                    Texas
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="new-york" textValue="New York">
                    New York
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="washington" textValue="Washington">
                    Washington
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
            <TextField className={"w-full"}>
              <Label className="text-xs text-[var(--primary-color)]">Текст сообщения</Label>
              <TextArea
                aria-label="Введите текст сообщения"
                className="h-auto input-primary"
                placeholder="Введите текст сообщения"
              />
            </TextField>
            <div className="flex flex-col gap-2">
              <Checkbox id="сonsent_mailing">
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label className="text-xs text-[var(--primary-color)]" htmlFor="сonsent_mailing">
                    Я согласен получать обновления по SMS и другие сообщения
                  </Label>
                </Checkbox.Content>
              </Checkbox>

              <Checkbox id="terms_policy">
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label className="text-xs text-[var(--primary-color)]" htmlFor="terms_policy">
                    Я ознакомился с условиями политики и выражаю свое согласие с ними
                  </Label>
                </Checkbox.Content>
              </Checkbox>
            </div>
            <Button className={"primaryBtn"}>Отправить</Button>
            <p className="text-xs text-[var(--primary-color)]">
              Предоставляя свой номер телефона, вы даете согласие на получение обновлений, новостей и эксклюзивных
              предложений по SMS от Primland. Вы можете отказаться в любое время, ответив “СТОП” на любое сообщение.
              Могут применяться тарифы на сообщения и передачу данных.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
