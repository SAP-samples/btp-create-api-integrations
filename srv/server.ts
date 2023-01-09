import cds from "@sap/cds";
import express, { Request, Response, NextFunction } from "express";

cds.on("bootstrap", (app: unknown) => {
    (<express.Application>app).options("/*", (req: Request, res: Response, next: NextFunction) => {
      if (
        req.header("WebHook-Request-Origin") &&
        req.header("WebHook-Request-Callback")
      ) {
        console.log(
          "Callback address: " + req.header("WebHook-Request-Callback")
        );
        try {
          res.setHeader("WebHook-Allowed-Origin", <string>req.header("WebHook-Request-Origin"));
          res.setHeader("WebHook-Allowed-Rate", "*");
          res.sendStatus(200);
          console.log("handshake complete");
        } catch (err) {
          console.error(err);
        }
      } else {
        next();
      }
    });
   (<express.Application>app).post("/apiReceiver/*", (req: Request, res: Response, next: NextFunction) => {
      if (
        req.headers["content-type"] &&
        req.headers["content-type"].includes("application/cloudevents+json")
      ) {
        try {
          req.headers["content-type"] = "application/json";
        } catch (err) {
          console.error(err);
        }
      }
      next();
    });
  });
  
  module.exports = cds.server;