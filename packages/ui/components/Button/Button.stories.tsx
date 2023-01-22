import React from "react";
import Button from "./Button";
import { AiFillAndroid, AiFillHome, AiOutlinePlus } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "../Link";

export const Variants = () => {
  return (
    <>
      <div className="flex flex-wrap gap-x-4">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="destructive">Desctructive Button</Button>
        <Button variant="transparent">Transparent Button</Button>
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-x-2">
        <Button size="sm">Small</Button>
        <Button variant="secondary">Medium</Button>
        <Button size="lg" variant="destructive">
          Large
        </Button>
        <Button size="xl">Extra Large</Button>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-2">
        <Button isLoading size="sm">
          Small
        </Button>
        <Button isLoading variant="secondary">
          Medium
        </Button>
        <Button isLoading size="lg" variant="destructive">
          Large
        </Button>
        <Button isLoading size="xl">
          Extra Large
        </Button>
      </div>

      <div className="mt-10 flex flex-col flex-wrap gap-y-2">
        <div className="w-full">
          <Button fullWidth>Full Width</Button>
          <Button className="mt-3">Auto</Button>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-x-4">
        <Button isDisabled>Primary Button</Button>
        <Button isDisabled variant="secondary">
          Secondary Disabled
        </Button>
        <Button isDisabled variant="destructive">
          Desctructive Disabled
        </Button>
        <Button isDisabled variant="transparent">
          Transparent Disabled
        </Button>
      </div>

      <div className="mt-10 flex flex-wrap gap-x-4">
        <Button isLoading>Loading Left</Button>
        <Button loadingPosition="right" isLoading variant="secondary">
          Loading Right
        </Button>
        <Button
          className="mt-5"
          loadingPosition="right"
          isLoading
          variant="destructive"
          fullWidth
        >
          Loading Right
        </Button>
        <Button
          className="mt-5"
          loadingPosition="right"
          isLoading
          variant="destructive"
          fullWidth
          isDisabled
        >
          Loading Right
        </Button>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-4">
        <Button size="sm" icon={BsFillPlayFill}>
          Primary Button
        </Button>
        <Button icon={AiOutlinePlus} variant="secondary">
          Add New
        </Button>
        <Button size="lg" icon={AiFillHome} variant="destructive">
          Desctructive Button
        </Button>
        <Button size="xl" icon={AiFillAndroid} variant="transparent">
          Transparent Button
        </Button>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-4">
        <Button size="sm" icon={BsFillPlayFill} iconPosition="right">
          Primary Button
        </Button>
        <Button
          isDisabled
          isLoading
          size="sm"
          icon={BsFillPlayFill}
          iconPosition="right"
          loadingPosition="right"
        >
          Primary Button
        </Button>
        <Button icon={FiSettings} iconPosition="right" variant="secondary">
          Secondary Button
        </Button>
        <Button
          size="lg"
          icon={AiFillHome}
          iconPosition="right"
          variant="destructive"
        >
          Desctructive Button
        </Button>
        <Button
          size="xl"
          icon={AiFillAndroid}
          iconPosition="right"
          variant="transparent"
        >
          Transparent Button
        </Button>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-4">
        <Button size="sm" icon={BsFillPlayFill} isAspectSquare />
        <Button
          variant="destructive"
          size="md"
          icon={FiSettings}
          isAspectSquare
        />
        <Button
          variant="secondary"
          size="lg"
          icon={AiFillAndroid}
          isAspectSquare
        />
        <Button isAspectSquare size="xl" icon={AiFillHome} />
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-4">
        <Button size="sm" icon={BsFillPlayFill} isRounded />
        <Button variant="destructive" size="md" icon={FiSettings} isRounded />
        <Button variant="secondary" size="lg" icon={AiFillAndroid} isRounded />
        <Button size="xl" icon={AiFillHome} isRounded />
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-4">
        <Button size="sm" icon={BsFillPlayFill} isDisabled />
        <Button variant="destructive" size="md" icon={FiSettings} isDisabled />
        <Button variant="secondary" size="lg" icon={AiFillAndroid} isDisabled />
        <Button size="xl" icon={AiFillHome} isDisabled />
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-4">
        <Button size="sm" icon={BsFillPlayFill} isDisabled isRounded />
        <Button
          variant="destructive"
          size="md"
          icon={FiSettings}
          isDisabled
          isRounded
        />
        <Button
          variant="secondary"
          size="lg"
          icon={AiFillAndroid}
          isDisabled
          isRounded
        />
        <Button size="xl" icon={AiOutlinePlus} isDisabled isRounded />
      </div>
    </>
  );
};

export const CustomRender = () => {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-4">
      <Button component={Link} href="https://www.google.com/" external>
        This is a link
      </Button>
      <Button variant="destructive" component="div">
        This is a div
      </Button>
      <Button variant="secondary" component="span">
        This is a span
      </Button>
    </div>
  );
};
